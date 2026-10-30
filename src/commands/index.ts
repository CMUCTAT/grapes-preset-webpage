import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '..';
import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  TARGET_PANEL_ID,
  LEFT_PANEL_WIDTH,
  LAYERS_RESIZE_HANDLE_WIDTH,
} from './../consts';
import openImport from './openImport';
import { PRESET_CATEGORIES } from '../presets';

type BlockPanelName = "basics" | "ctat" | "presets";

let activeOba: "" | BlockPanelName = "";

const blockPanelCategories: Record<BlockPanelName, string[]> = {
  basics: ['Basic Containers', 'Basics', 'Basic Text Components'],
  ctat: ['CTAT Components'],
  presets: PRESET_CATEGORIES,
};

export default (editor: Editor, config: RequiredPluginOptions) => {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;

  openImport(editor, config);

  Commands.add(cmdDeviceDesktop, {
    run: ed => ed.setDevice('Desktop'),
    stop: () => {},
  });
  Commands.add(cmdDeviceTablet, {
    run: ed => ed.setDevice('Tablet'),
    stop: () => {},
  });
  Commands.add(cmdDeviceMobile, {
    run: ed => ed.setDevice('Mobile portrait'),
    stop: () => {},
  });
  Commands.add(cmdClear, (e: Editor) => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));

  let blocksPanel: HTMLElement | null = null;
  const addBlockPanelCommand = (commandId: string, panelName: BlockPanelName) => {
    Commands.add(commandId, {
      run(editor: any) {
        activeOba = panelName;

        const blockManager = editor.BlockManager;
        const panelManager = editor.Panels;
        const blockManagerConfig = blockManager.getConfig();

        blocksPanel = document.getElementById('oba-custom-panel');
        if (!blocksPanel) {
          blocksPanel = document.createElement('div');
          blocksPanel.id = 'oba-custom-panel';

          let panel = panelManager.getPanel('oba-custom-panel');
          if (!panel) panel = panelManager.addPanel({ id: 'oba-custom-panel' });

          if (blockManagerConfig.custom) {
            blockManager.__trgCustom({ container: blocksPanel });
          } else {
            blocksPanel.appendChild(blockManager.render());
          }

          panel.set('appendContent', blocksPanel).trigger('change:appendContent');
        }

        blocksPanel.style.display = 'block';
        const visibleCategories = new Set(blockPanelCategories[panelName]);
        setTimeout(() => {
          blocksPanel?.querySelectorAll<HTMLElement>('.gjs-block-category').forEach(category => {
            const label = category.querySelector('.gjs-title')?.textContent?.trim();
            category.style.display = label && visibleCategories.has(label) ? 'block' : 'none';
          });
        }, 0);
      },

      stop() {
        if (!blocksPanel) return;
        setTimeout(() => {
          if (blocksPanel && activeOba === panelName) blocksPanel.style.display = 'none';
        }, 150);
      },
    });
  };

  addBlockPanelCommand('presets-override', 'presets');
  addBlockPanelCommand('oba-override', 'basics');
  addBlockPanelCommand('ctat-override', 'ctat');


  Commands.add('ota-override', (function () {
      let traitPanel: HTMLElement | null = null;
      let titleElement: HTMLElement | null = null;
      return {

        run(editor: any) {

          const traitManager = editor.TraitManager;
          const panelManager = editor.Panels;
          const traitManagerConfig = traitManager.getConfig();


          if (traitManagerConfig.appendTo) return;

          if (!traitPanel) {
            const traitPanelElement = document.createElement('div');
            traitPanelElement.id = 'custom-ota-panel'; 

          // Create a title element for the selected component
          titleElement = document.createElement('div');
          titleElement.id = 'ota-title';
          titleElement.style.cssText = `
            font-size: 16px;
            font-weight: bold;
            padding: 0px 10px 5px 10px;
            background-color: #182444;
            color: white;
            text-align: left;
            border-bottom: 1px solid #1C2F61;
          `;
          titleElement.innerText = 'No Component Selected'; // Default text
          traitPanelElement.appendChild(titleElement);

            let panel = panelManager.getPanel('custom-ota-panel');
            if (!panel) {
              panel = panelManager.addPanel({
                id: 'custom-ota-panel',
              });
            }

            if (traitManagerConfig.custom) {
              traitManager.__trgCustom({ container: traitPanelElement });
            } else {
              traitPanelElement.appendChild(traitManager.render());
            }

            panel.set('appendContent', traitPanelElement).trigger('change:appendContent');
            traitPanel = traitPanelElement;
          }
          traitPanel.style.display = 'block';

          editor.on('component:selected', (component: any) => {
            if (titleElement) {
              // Try to get a label trait if it exists
              let componentLabel = component?.get('label');

              // If not, try to get a trait value (e.g., data-ctat-label or similar)
              if (!componentLabel && component?.get('traits')) {
                const labelTrait = component.get('traits').find((t: any) =>
                  t.name === 'label' || t.name === 'data-ctat-label'
                );
                if (labelTrait) {
                  componentLabel = component.getAttributes()[labelTrait.name];
                }
              }

              // Fallback to type if no label found
              if (!componentLabel) {
                componentLabel = component?.get('type') || 'Unnamed Component';
              }

              titleElement.innerText = componentLabel;
            }
          });

          // Reset the title when no component is selected
          editor.on('component:deselected', () => {
            if (titleElement) {
              titleElement.innerText = 'No Component Selected';
            }
          });
        },
        stop() {
          if (traitPanel) {
            traitPanel.style.display = 'none';
          }
        },
      };
    })());
  
  Commands.add('osa-override', (function () {
      let stylePanel: HTMLElement | null = null;
      return {

        run(editor: any) {

          const styleManager = editor.StyleManager;
          const selectorManager = editor.SelectorManager || editor.Selectors;
          const panelManager = editor.Panels;
          const styleManagerConfig = styleManager.getConfig();

          if (styleManagerConfig.appendTo) return;
          if (!stylePanel) {
            const stylePanelElement = document.createElement('div');
            stylePanelElement.id = 'custom-osa-panel';

            let panel = panelManager.getPanel('custom-osa-panel');
            if (!panel) {
              panel = panelManager.addPanel({
                id: 'custom-osa-panel',
              });
            }
            panel.set('appendContent', stylePanelElement).trigger('change:appendContent');

            if (selectorManager.getConfig().custom) {
              selectorManager.__trgCustom({ container: stylePanelElement });
            } else {
              stylePanelElement.appendChild(selectorManager.render());
            }

            if (styleManagerConfig.custom) {
              styleManager.__trgCustom({ container: stylePanelElement });
            } else {
              stylePanelElement.appendChild(styleManager.render());
            }

            stylePanel = stylePanelElement;
          }

          stylePanel.style.display = 'block';
        },
        stop() {

        },
      };
    })());
  
  
  Commands.add('ola-override', (function () {
    let layersPanel: HTMLElement | null = null;
    let resizeHandle: HTMLElement | null = null;
    let layersWidth = parseFloat(LEFT_PANEL_WIDTH);
    return {

      run(editor: any) {

        const layerManager = editor.LayerManager;
        const panelManager = editor.Panels;
        const layerManagerConfig = layerManager.getConfig();
        let panelInfo = panelManager.getPanel(TARGET_PANEL_ID);

        if (layerManagerConfig.appendTo) return;
        const canvas = editor.Canvas.getElement();
        
        if (canvas) {
          Object.assign(canvas.style, {
            left: `var(--gjs-layers-width, ${LEFT_PANEL_WIDTH})`,
            width: `calc(100% - var(--gjs-left-width) - var(--gjs-layers-width, ${LEFT_PANEL_WIDTH}))`,
            transition: 'left 0.5s ease-in-out',
          });
        }
        if (!layersPanel) {
          const layersPanelElement = document.createElement('div');
          layersPanelElement.id = 'my-custom-layers';

          let panel = panelManager.getPanel(TARGET_PANEL_ID);
          if (!panel) {
            panel = panelManager.addPanel({
              id: TARGET_PANEL_ID,
            });
          }

          if (layerManagerConfig.custom) {
            layerManager.__trgCustom({ container: layersPanelElement });
          } else {
            layersPanelElement.appendChild(layerManager.render());
          }

          panel.set('appendContent', layersPanelElement).trigger('change:appendContent');
          layersPanel = layersPanelElement;

          resizeHandle = document.createElement('div');
          Object.assign(resizeHandle.style, {
            position: 'absolute',
            top: 'var(--gjs-canvas-top)',
            bottom: '0',
            left: `calc(var(--gjs-layers-width, ${LEFT_PANEL_WIDTH}) - ${LAYERS_RESIZE_HANDLE_WIDTH + 1}px)`,
            width: `${LAYERS_RESIZE_HANDLE_WIDTH}px`,
            cursor: 'ew-resize',
            touchAction: 'none',
            userSelect: 'none',
            zIndex: 10000,
          });
          let resizing = false;
          let editorLeft = 0;
          let maximumWidth = 0;
          resizeHandle.addEventListener('pointerdown', event => {
            const editorRect = editor.getContainer().getBoundingClientRect();
            editorLeft = editorRect.left;
            maximumWidth = editorRect.width / 2;
            resizing = true;
            if (canvas) canvas.style.transition = 'none';
            resizeHandle?.setPointerCapture(event.pointerId);
          });
          resizeHandle.addEventListener('pointermove', event => {
            if (!resizing) return;
            layersWidth = Math.min(maximumWidth, Math.max(parseFloat(LEFT_PANEL_WIDTH), event.clientX - editorLeft + 5));
            editor.getContainer().style.setProperty('--gjs-layers-width', `${layersWidth}px`);
            editor.refresh({ tools: true });
          });
          const stopResizing = () => {
            if (resizing) editor.refresh({ tools: true });
            resizing = false;
            if (canvas) canvas.style.transition = 'left 0.5s ease-in-out';
          };
          resizeHandle.addEventListener('pointerup', stopResizing);
          resizeHandle.addEventListener('pointercancel', stopResizing);
          editor.getContainer().appendChild(resizeHandle);
        }
        layersPanel.classList.remove('rise');
        layersPanel.classList.add('opening');
        layersPanel.style.display = 'block';
        if (resizeHandle) resizeHandle.style.display = 'block';
        layersPanel.addEventListener('animationend', () => {
          if (!layersPanel) return;
          layersPanel.classList.remove('opening');
        }, { once: true });

      },
      
      stop() {
        if (layersPanel) {
          if (resizeHandle) resizeHandle.style.display = 'none';
          layersPanel.classList.remove('opening');
          layersPanel.classList.add('rise');
          layersPanel.addEventListener('animationend', () => {
            if (!layersPanel) return;
            layersPanel.style.display = 'none';
            layersPanel.classList.remove('rise');
          }, { once: true });

          const canvas = editor.Canvas.getElement();
          if (canvas) {
            Object.assign(canvas.style, {
              left: '0',
              width: 'calc(100% - var(--gjs-left-width))',
              transition: 'left 0.5s ease-in-out',
            });
          }
        }
      },
    };
  })());
}