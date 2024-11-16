import type { Editor } from 'grapesjs';
// import CommandObject from 'grapesjs';
import { RequiredPluginOptions } from '..';
import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  TARGET_PANEL_ID,
} from './../consts';
import openImport from './openImport';


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
      let layers: HTMLElement | null = null;
      return {
  
        run(editor: any) {
  
          const lm = editor.BlockManager;
          const pn = editor.Panels;
          const lmConfig = lm.getConfig();
  
  
          let xxx = pn.getPanel("oba-custom-panel");

          if (!layers) {
            // Create the layers container
            const layersElement = document.createElement('div');
            layersElement.id = "oba-custom-panel"; // Optional: Assign an ID for easier debugging
  
            let panel = pn.getPanel("oba-custom-panel");
            if (!panel) {
              panel = pn.addPanel({
                id: "oba-custom-panel",
              });
            }
  
            if (lmConfig.custom) {
              lm.__trgCustom({ container: layersElement });
            } else {
              layersElement.appendChild(lm.render());
            }
  
            panel.set('appendContent', layersElement).trigger('change:appendContent');
            layers = layersElement;
          }
  
          layers.style.display = 'block';
        },
        stop() {
          if (layers) {
            layers.style.display = 'none';
          }
        },
      };
    })());

  Commands.add('ota-override', (function () {
      let layers: HTMLElement | null = null;
      return {
  
        run(editor: any) {
  
          const lm = editor.TraitManager;
          const pn = editor.Panels;
          const lmConfig = lm.getConfig();
  
  
          let xxx = pn.getPanel('custom-ota-panel');
          console.log("panel");
          console.log(xxx);
  
          if (lmConfig.appendTo) return;

          if (!layers) {
            // Create the layers container
            const layersElement = document.createElement('div');
            layersElement.id = 'custom-ota-panel'; // Optional: Assign an ID for easier debugging
  
            let panel = pn.getPanel('custom-ota-panel');
            if (!panel) {
              panel = pn.addPanel({
                id: 'custom-ota-panel',
              });
            }
  
            if (lmConfig.custom) {
              lm.__trgCustom({ container: layersElement });
            } else {
              layersElement.appendChild(lm.render());
            }
  
            panel.set('appendContent', layersElement).trigger('change:appendContent');
            layers = layersElement;
          }
  
          layers.style.display = 'block';
        },
        stop() {
        },
      };
    })());
  
  Commands.add('osa-override', (function () {
      let layers: HTMLElement | null = null;
      return {
  
        run(editor: any) {
  
          const lm = editor.StyleManager;
          const pn = editor.Panels;
          const lmConfig = lm.getConfig();
  
  
          let xxx = pn.getPanel('custom-osa-panel');
          console.log("panel");
          console.log(xxx);
  
          if (lmConfig.appendTo) return;
          if (!layers) {
            const layersElement = document.createElement('div');
            layersElement.id = 'custom-osa-panel';
  
            let panel = pn.getPanel('custom-osa-panel');
            if (!panel) {
              panel = pn.addPanel({
                id: 'custom-osa-panel',
              });
            }
  
            if (lmConfig.custom) {
              lm.__trgCustom({ container: layersElement });
            } else {
              layersElement.appendChild(lm.render());
            }
  
            panel.set('appendContent', layersElement).trigger('change:appendContent');
            layers = layersElement;
          }
  
          layers.style.display = 'block';
        },
        stop() {

        },
      };
    })());
  
  
  editor.Commands.add('ola-override', (function () {
    let layers: HTMLElement | null = null;
    return {

      run(editor: any) {

        const lm = editor.LayerManager;
        const pn = editor.Panels;
        const lmConfig = lm.getConfig();


        let xxx = pn.getPanel(TARGET_PANEL_ID);
        console.log("panel");
        console.log(xxx);

        if (lmConfig.appendTo) return;
        const wrapper = editor.getWrapper();
        console.log(wrapper)
        if(wrapper && editor.getDevice() == 'Desktop'){
        wrapper.setStyle({
          padding:'0px 0px 0px 200px'
        });
      }
        if (!layers) {
          // Create the layers container
          const layersElement = document.createElement('div');
          layersElement.id = 'my-custom-layers'; // Optional: Assign an ID for easier debugging

          let panel = pn.getPanel(TARGET_PANEL_ID);
          if (!panel) {
            panel = pn.addPanel({
              id: TARGET_PANEL_ID,
            });
          }

          if (lmConfig.custom) {
            lm.__trgCustom({ container: layersElement });
          } else {
            layersElement.appendChild(lm.render());
          }

          panel.set('appendContent', layersElement).trigger('change:appendContent');
          layers = layersElement;
        }

        layers.style.display = 'block';
      },
      stop() {
        if (layers) {
          layers.style.display = 'none';
          const wrapper = editor.getWrapper();
          if(wrapper)
          {
          wrapper.setStyle({
            padding:'0px 0px 0px 0px'
          });
        }
        }
      },
    };
  })());
}
