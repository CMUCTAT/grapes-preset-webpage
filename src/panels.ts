import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '.';

import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  TARGET_PANEL_ID,
  LEFT_PANEL_WIDTH,
  CUSTOM_OTA_PANEL_HEIGHT,
} from './consts';

const ICONS = {
  desktop: '<path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />',
  tablet: '<path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />',
  mobile: '<path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />',
  visibility: '<path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />',
  preview: '<path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />',
  fullscreen: '<path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />',
  export: '<path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />',
  undo: '<path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />',
  redo: '<path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />',
  import: '<path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />',
  clear: '<path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />',
  arrowDown: '<path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" transform="scale(0.4)">'
};

const createIcon = (path: string, iconStyle: string = 'display: block; width:26px') => {
  return `<svg ${iconStyle} viewBox="0 0 24 24">${path}</svg>`;
};

const createDropdownContent = (label: string, width: string = '180px') => {
  return `
<div 
  class="layers-button-content" 
  style="
    width: ${width}; 
    height: 15px; 
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4px;
  "
  title="${label} Panel"
>
  <svg 
    width="24" 
    height="24"  
    viewBox="0 0 350 350" 
    style="
      fill: var(--gjs-font-color); 
      transition: transform 0.3s ease;
      transform: translate(5px, 5px)
    "
    class="dropdown-arrow"
  >
    ${ICONS.arrowDown}
  </svg>
  <span 
    class="layers-button-text" 
    style="
      font-size: 14px; 
      color: var(--gjs-font-color); 
      font-weight: 500;
      user-select: none;
      margin-bottom: 4px;
    "
  >
      ${label}
  </span>
</div>`;
};

const panelStyles = `
.gjs-pn-active .dropdown-arrow {
  transform: rotate(180deg) translate(10px, 10px) !important;
}

.gjs-pn-oba-custom-panel,
.gjs-pn-ctat-custom-panel,
.gjs-pn-my-custom-panel,
.gjs-pn-custom-ota-panel {
  z-index: 2;
}

.gjs-pn-custom-osa-panel {
  z-index: 2;
}

@keyframes fall {
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}

.opening {
  animation: fall 0.2s ease-out forwards !important;
}

.rise {
  animation: rise 0.2s ease-in forwards !important;
}

@keyframes rise {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

#oba-custom-panel {
  top: var(--gjs-canvas-top);
  position: absolute;
  z-index: 1000;
  margin-top: 0;
  background-color: var(--gjs-primary-color);  
  width: 550px;
  max-height: calc(90vh - var(--gjs-canvas-top));
  overflow: auto;
}

.gjs-title {
  display: none;
}

#ctat-custom-panel {
  left: 400px;    
  position: absolute;
  z-index: 1000;
  top: var(--gjs-canvas-top);
  margin-top: 0;
  background-color: #182444;
  width: 200px;
  height: 40vh;
}

#custom-ota-panel {
  position: absolute;
  top: var(--gjs-canvas-top);
  background-color: #182444;
  width: 100%;
  height: ${CUSTOM_OTA_PANEL_HEIGHT};
  overflow: auto;
  padding: 10px 0px;
  border-bottom: solid 1px var(--gjs-main-light-color);
}

#custom-osa-panel {
  position: absolute;
  top: calc(var(--gjs-canvas-top) + ${CUSTOM_OTA_PANEL_HEIGHT});
  margin-top: 0;
  background-color: #182444;
  width: 100%;
  height: calc(90vh - var(--gjs-canvas-top) - ${CUSTOM_OTA_PANEL_HEIGHT});
  overflow: auto;
  padding-bottom: 10px;
}

#custom-osa-panel .gjs-clm-sels-info {
  min-height: 10px;
}

#custom-osa-panel .btn {
    color: var(--gjs-font-color);
    width: 100%;
}

#my-custom-layers {
  position: absolute;
  top: var(--gjs-canvas-top);
  left: 0px;
  margin-left: -5px;
  background-color: #182444;
  width: fit-content;
  min-width: ${LEFT_PANEL_WIDTH};
  max-width: 350px;
  height: calc(90vh - var(--gjs-canvas-top));
  overflow: auto;
  padding: 10px 10px 20px 10px;
}

.gjs-layer-item {
  height: 20px;
  border-bottom: none;
}

.gjs-pn-layers-toggle {
  position: absolute;
  left: 0px;
  min-width: 180px;
}

.gjs-pn-layers-toggle .gjs-pn-buttons {
  height: 100%;
}

.gjs-pn-layers-toggle .gjs-pn-btn {
  margin-right: 0px;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  border-right: 1px solid #1C2F61;
}

.gjs-pn-devices-c {
  position: absolute;
  left: 180px;
}

.gjs-pn-devices-c .gjs-pn-buttons, .gjs-pn-oba-toggle .gjs-pn-buttons {
  height: 100%;
}

.gjs-pn-devices-c .gjs-pn-btn, .gjs-pn-oba-toggle .gjs-pn-btn {
  margin-right: 0px;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  border-right: 1px solid #1C2F61;
}

.gjs-pn-devices-c .gjs-pn-btn:nth-last-child(4),
.gjs-pn-devices-c .gjs-pn-btn:nth-last-child(5),
.gjs-pn-devices-c .gjs-pn-btn:last-child {
  border-right: none;
}

.gjs-pn-oba-toggle {
  position: absolute;
  left: 400px;
}

.gjs-block {
  width: 80px;
  aspect-ratio: 1 / 1;
  min-height: 0px;
  margin: 0px;
  padding: 0.5em;
}

.gjs-block__media {
  margin-bottom: -20px;
}

.gjs-block__media svg {
  width: 48px;
  height: 48px;
}

.gjs-block__media svg path {
  fill: #b9a5a6;
}

// .draggable-divider {
//   width: 100%;
//   height: 6px;
//   background: #444;
//   cursor: row-resize;
//   user-select: none;
//   touch-action: none;
// }


.gjs-field input, .gjs-field textarea {
  color: black !important;
}
`;


export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor;
  const config = editor.getConfig();
  
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';
  
  const iconStyle = 'style="display: block; width:26px"';

  config.showDevices = false;

  const commandPanelButtons = [{}];
  
  const devicePanelButtons = [
    {
      id: cmdDeviceDesktop,
      command: cmdDeviceDesktop,
      active: true,
      label: createIcon(ICONS.desktop, iconStyle)
    },
    {
      id: cmdDeviceTablet,
      command: cmdDeviceTablet,
      label: createIcon(ICONS.tablet, iconStyle)
    },
    {
      id: cmdDeviceMobile,
      command: cmdDeviceMobile,
      label: createIcon(ICONS.mobile, iconStyle)
    }
  ];

  const obaPanelButtons = [
    {
      id: 'oba-override',
      command: 'oba-override',
      label: createDropdownContent('Basics', '100px')
    },
    {
      id: 'ctat-override',
      command: 'oba-override-2',
      label: createDropdownContent('CTAT', '100px')
    }
  ]
  
  const optionPanelButtons = [
    {
      id: swv,
      command: swv,
      context: swv,
      label: createIcon(ICONS.visibility, iconStyle),
      attributes: { 'data-tippy-content': 'View Grid lines' }
    },
    {
      id: prv,
      context: prv,
      command: () => editor.runCommand(prv),
      label: createIcon(ICONS.preview, iconStyle),
      attributes: { 'data-tippy-content': 'Preview' }
    },
    {
      id: ful,
      command: ful,
      context: ful,
      label: createIcon(ICONS.fullscreen, iconStyle),
      attributes: { 'data-tippy-content': 'Full Screen' }
    },
    {
      id: expt,
      command: () => editor.runCommand(expt),
      label: createIcon(ICONS.export, iconStyle),
      attributes: { 'data-tippy-content': 'View Code' }
    },
    {
      id: 'undo',
      command: () => editor.runCommand('core:undo'),
      label: createIcon(ICONS.undo, iconStyle),
      attributes: { 'data-tippy-content': 'Undo' }
    },
    {
      id: 'redo',
      command: () => editor.runCommand('core:redo'),
      label: createIcon(ICONS.redo, iconStyle),
      attributes: { 'data-tippy-content': 'Redo' }
    },
    {
      id: cmdImport,
      command: () => editor.runCommand(cmdImport),
      label: createIcon(ICONS.import, iconStyle),
      attributes: { 'data-tippy-content': 'Import' }
    },
    {
      id: cmdClear,
      command: () => editor.runCommand(cmdClear),
      label: createIcon(ICONS.clear, iconStyle),
      attributes: { 'data-tippy-content': 'Clear Canvas' }
    }
  ];

  Panels.getPanels().reset([
    {
      id: 'commands',
      buttons: commandPanelButtons,
    },
    {
      id: 'layers-toggle',
      buttons: [
        {
          id: ola,
          command: "ola-override",
          label: createDropdownContent('Layers')
        }
      ]
    },
    {
      id: 'devices-c',
      buttons: devicePanelButtons
    },
    {
      id: 'oba-toggle',
      buttons: obaPanelButtons
    },
    {
      id: 'options',
      buttons: optionPanelButtons
    }
  ]);

  const setupSharedContainer = () => {
    let sharedContainer = document.getElementById('shared-ota-osa-container');
    
    if (!sharedContainer) {
      sharedContainer = document.createElement('div');
      sharedContainer.id = 'shared-ota-osa-container';
      
      Object.assign(sharedContainer.style, {
        position: 'fixed',
        top: '50px',  
        right: '0',
        width: '15%',
        height: 'calc(100vh - 50px)', 
        display: 'flex',
        flexDirection: 'column',  
      });
      
      const editorContainer = document.getElementById('gjs');
      if (editorContainer) {
        editorContainer.appendChild(sharedContainer);
      }
    }
    
    return sharedContainer;
  };

  // const setupPanels = (sharedContainer: HTMLElement) => {
  //   const mainPanel = document.createElement('div');
  //   mainPanel.id = TARGET_PANEL_ID;
  //   mainPanel.className = 'my-custom-left-panel';
  //   document.getElementById('gjs')?.appendChild(mainPanel);
    
  //   const osaPanel = document.createElement('div');
  //   osaPanel.id = 'custom-osa-panel';
  //   sharedContainer.appendChild(osaPanel);
    
  //   const otaPanel = document.createElement('div');
  //   otaPanel.id = 'custom-ota-panel';
  //   sharedContainer.appendChild(otaPanel);
    
  //   return { mainPanel, osaPanel, otaPanel };
  // };

  const setupPanels = (sharedContainer: HTMLElement) => {
    const mainPanel = document.createElement('div');
    mainPanel.id = TARGET_PANEL_ID;
    mainPanel.className = 'my-custom-left-panel';
    document.getElementById('gjs')?.appendChild(mainPanel);

    const otaPanel = document.createElement('div');
    otaPanel.id = 'custom-ota-panel';
    otaPanel.style.height = '150px'; // initial height in px
    otaPanel.style.overflow = 'auto';

    const divider = document.createElement('div');
    divider.className = 'draggable-divider';
    Object.assign(divider.style, {
      width: '100%',
      height: '6px',
      background: '#444',
      cursor: 'row-resize',
      position: 'relative',
      zIndex: 1002,
      userSelect: 'none',
      touchAction: 'none'
    });

    const osaPanel = document.createElement('div');
    osaPanel.id = 'custom-osa-panel';
    osaPanel.style.flex = '1 1 auto';
    osaPanel.style.overflow = 'auto';

    sharedContainer.appendChild(otaPanel);
    sharedContainer.appendChild(divider);
    sharedContainer.appendChild(osaPanel);

      let isDragging = false;

    divider.addEventListener('mousedown', function(e) {
      isDragging = true;
      document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      const containerRect = sharedContainer.getBoundingClientRect();
      const minHeight = 50;
      const maxHeight = containerRect.height - 50;
      let newHeight = e.clientY - containerRect.top;
      newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
      otaPanel.style.height = newHeight + 'px';
      // osaPanel flex will fill the rest
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
      document.body.style.userSelect = '';
    });

    // (Optional) Add drag logic here or in the parent setup

    return { mainPanel, otaPanel, osaPanel, divider };
  };


  const addStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = panelStyles;
    document.getElementsByTagName('head')[0].appendChild(style);
  };

  const sharedContainer = setupSharedContainer();
  const { mainPanel, osaPanel, otaPanel } = setupPanels(sharedContainer);
  addStyles();

  editor.on('load', () => {
    mainPanel.style.display = 'block';
    osaPanel.style.display = 'block';
    otaPanel.style.display = 'block';
    
    editor.runCommand('osa-override');
    editor.runCommand('ota-override');
  });

  if (opts.showStylesOnChange) {
    editor.on('component:selected', () => {
      const openSmBtn = Panels.getButton('views', osm);
      const openLayersBtn = Panels.getButton('views', ola);
    
      if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
        openSmBtn?.set('active', true);
      }
    });
  }
};