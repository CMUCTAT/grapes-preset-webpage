import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '..';
import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  TARGET_PANEL_ID,
  LEFT_PANEL_WIDTH,
} from './../consts';
import openImport from './openImport';

let activeOba: "" | "basics" | "ctat" = "";

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

  Commands.add('oba-override', (function () {
      let blocksPanel: HTMLElement | null = null;
      return {

        run(editor: any) {
          activeOba = "basics";

          const blockManager = editor.BlockManager;
          const panelManager = editor.Panels;
          const blockManagerConfig = blockManager.getConfig();

          blocksPanel = document.getElementById('oba-custom-panel');
          if (!blocksPanel) {
            const blocksPanelElement = document.createElement('div');
            blocksPanelElement.id = "oba-custom-panel";

            let panel = panelManager.getPanel("oba-custom-panel");
            if (!panel) {
              panel = panelManager.addPanel({
                id: "oba-custom-panel",
              });
            }

            if (blockManagerConfig.custom) {
              blockManager.__trgCustom({ container: blocksPanelElement });
            } else {
              blocksPanelElement.appendChild(blockManager.render());
            }

            panel.set('appendContent', blocksPanelElement).trigger('change:appendContent');
            blocksPanel = blocksPanelElement;
          }

          blocksPanel.style.display = 'block';

          setTimeout(() => {
            if (blocksPanel) {

              let blockCategories = blocksPanel.querySelectorAll('.gjs-block-category');

              if (blockCategories.length < 3) {
                blocksPanel.appendChild(editor.BlockManager.render())
                blockCategories = blocksPanel.querySelectorAll('.gjs-block-category');
              }
              if (blockCategories.length >= 3) {
                blockCategories.forEach((category: Element, index: Number) => {
                  if (index === 2) {
                    (category as HTMLElement).style.display = 'none';
                  } else {
                    (category as HTMLElement).style.display = 'block';
                  }
                });
              }
            }
          }, 0);
        },
        stop() {
          if (!blocksPanel) return;

          setTimeout(() => {
            if (!blocksPanel) return;
            if (activeOba === "basics") {
              blocksPanel.style.display = 'none';
            }
          }, 150);
        },
      };
    })());
  
    Commands.add('oba-override-2', (function () {
      let ctatBlocksPanel: HTMLElement | null = null;
      return {

        run(editor: any) {
          activeOba = "ctat";

          const blockManager = editor.BlockManager;
          const panelManager = editor.Panels;
          const blockManagerConfig = blockManager.getConfig();
          ctatBlocksPanel = document.getElementById('oba-custom-panel');

          if (!ctatBlocksPanel) {
            const ctatBlocksPanelElement = document.createElement('div');
            ctatBlocksPanelElement.id = "oba-custom-panel";

            let panel = panelManager.getPanel("oba-custom-panel");
            if (!panel) {
              panel = panelManager.addPanel({
                id: "oba-custom-panel",
              });
            }

            if (blockManagerConfig.custom) {
              blockManager.__trgCustom({ container: ctatBlocksPanelElement });
            } else {
              ctatBlocksPanelElement.appendChild(blockManager.render());
            }

            panel.set('appendContent', ctatBlocksPanelElement).trigger('change:appendContent');
            ctatBlocksPanel = ctatBlocksPanelElement;
          }

          ctatBlocksPanel.style.display = 'block';

          setTimeout(() => {
            if (ctatBlocksPanel) {

              let blockCategories = ctatBlocksPanel.querySelectorAll('.gjs-block-category');

              if (blockCategories.length < 3) {
                ctatBlocksPanel.appendChild(editor.BlockManager.render())
                blockCategories = ctatBlocksPanel.querySelectorAll('.gjs-block-category');
              }
              if (blockCategories.length >= 3) {
                blockCategories.forEach((category: Element, index: Number) => {
                  if (index === 2) {
                    (category as HTMLElement).style.display = 'block';
                  } else {
                    (category as HTMLElement).style.display = 'none';
                  }
                });
              }
            }
          }, 0);
        },
        
        stop() {
          if (!ctatBlocksPanel) return;

          setTimeout(() => {
            if (!ctatBlocksPanel) return;
            if (activeOba === "ctat") {
              ctatBlocksPanel.style.display = 'none';
            }
          }, 150);
        },
      };
    })());


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
              selectorManager.__trgCustom({ container: stylePanelElement });   // <-- critical line
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
    return {

      run(editor: any) {

        const layerManager = editor.LayerManager;
        const panelManager = editor.Panels;
        const layerManagerConfig = layerManager.getConfig();
        let panelInfo = panelManager.getPanel(TARGET_PANEL_ID);

        if (layerManagerConfig.appendTo) return;
        const wrapper = editor.getWrapper();
        
        if(wrapper && editor.getDevice() == 'Desktop'){
        wrapper.setStyle({
          padding:`0px 0px 0px ${LEFT_PANEL_WIDTH}`,
          transition: 'padding 0.5s ease-in-out'
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
        }
        layersPanel.classList.remove('rise');
        layersPanel.classList.add('opening');
        layersPanel.style.display = 'block';
        layersPanel.addEventListener('animationend', () => {
          if (!layersPanel) return;
          layersPanel.classList.remove('opening');
        }, { once: true });

      },
      
      stop() {
        if (layersPanel) {
          layersPanel.classList.remove('opening');
          layersPanel.classList.add('rise');
          layersPanel.addEventListener('animationend', () => {
            if (!layersPanel) return;
            layersPanel.style.display = 'none';
            layersPanel.classList.remove('rise');
          }, { once: true });

          const wrapper = editor.getWrapper();
          if (wrapper) {
            wrapper.setStyle({
              padding:'0px 0px 0px 0px',
              transition: 'padding 0.5s ease-in-out'
            });
          }
        }
      },
    };
  })());
}