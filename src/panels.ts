import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '.';

import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  TARGET_PANEL_ID,
} from './consts';

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

  Panels.getPanels().reset([
    {
      id: 'commands',
      buttons: [{}],
    },

    {
      id: 'devices-c',
      buttons: [{
      id: ola,
      command: "ola-override",
      label:
      `
<div 
  class="layers-button-content" 
  style="
    width: 180px; 
    height: 15px; 
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4px;
  "
  title="Layers Panel"
>
  <svg 
    width="24" 
    height="24"  
    viewBox="0 0 350 350" 
    style="
      fill: white; 
      transition: transform 0.3s ease;
      transform: translate(5px, 5px)
    "
    class="dropdown-arrow"
  >
    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"   transform="scale(0.4)" 
/>
  </svg>
  <span 
    class="layers-button-text" 
    style="
      font-size: 14px; 
      color: white; 
      font-weight: 500;
      user-select: none;
      margin-bottom: 4px;
    "
  >
      Layers
  </span>
</div>

    `
    },
    {
        id: cmdDeviceDesktop,
        command: cmdDeviceDesktop,
        active: true,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`
      },{
        id: cmdDeviceTablet,
        command: cmdDeviceTablet,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`
      },{
        id: cmdDeviceMobile,
        command: cmdDeviceMobile,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`
      } ,     {
        id: 'oba-override',
        command: 'oba-override',
        label: `<div 
  class="layers-button-content" 
  style="
    width: 100px; 
    height: 15px; 
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4px;
  "
  title="Layers Panel"
>
  <svg 
    width="24" 
    height="24"  
    viewBox="0 0 350 350" 
    
    style="
      fill: white; 
      transition: transform 0.3s ease;
          transform: translate(5px, 5px)

    "
    class="dropdown-arrow"
  >
    <path
    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
    transform="scale(0.4)">
  </svg>
  <span 
    class="layers-button-text" 
    style="
      font-size: 14px; 
      color: white; 
      font-weight: 500;
      user-select: none;
      margin-bottom: 4px;
    "
  >
      Basics
  </span>
</div>`
      }, {
        id: 'ctat-override',
        command: 'oba-override-2',
        label: `<div 
  class="layers-button-content" 
  style="
    width: 100px; 
    height: 15px; 
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4px;
  "
  title="Layers Panel"
>
  <svg 
    width="24" 
    height="24"  
    viewBox="0 0 350 350" 
    
    style="
      fill: white; 
      transition: transform 0.3s ease;
          transform: translate(5px, 5px)

    "
    class="dropdown-arrow"
  >
    <path
    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
    transform="scale(0.4)">
  </svg>
  <span 
    class="layers-button-text" 
    style="
      font-size: 14px; 
      color: white; 
      font-weight: 500;
      user-select: none;
      margin-bottom: 4px;
    "
  >
      CTAT
  </span>
</div>`
      }]
    },
    {
      id: 'options',
      buttons: [{
        id: swv,
        command: swv,
        context: swv,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
    </svg>`,
      },{
        id: prv,
        context: prv,
        command: () => editor.runCommand(prv),
        label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>`
      },{
        id: ful,
        command: ful,
        context: ful,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
        </svg>`
      },{
        id: expt,
        command: () => editor.runCommand(expt),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>`
      },{
        id: 'undo',
        command: () => editor.runCommand('core:undo'),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
        </svg>`
      },{
        id: 'redo',
        command: () => editor.runCommand('core:redo'),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
        </svg>`,
      },{
        id: cmdImport,
        command: () => editor.runCommand(cmdImport),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>`,
      },{
        id: cmdClear,
        command: () => editor.runCommand(cmdClear),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>`,
      }],
  }]);

  let sharedContainer = document.getElementById('shared-ota-osa-container');
if (!sharedContainer) {
  sharedContainer = document.createElement('div');
  sharedContainer.id = 'shared-ota-osa-container';
  document.body.appendChild(sharedContainer);
}


  const panelEl = document.createElement('div');
  const panelE2 = document.createElement('div');
  const panelE3 = document.createElement('div');
  panelEl.id = TARGET_PANEL_ID;
  panelE2.id = 'custom-osa-panel'
  panelE3.id = 'custom-ota-panel'
  panelEl.className = 'my-custom-left-panel';
  panelE2.id = 'custom-osa-panel'
  panelE3.id = 'custom-ota-panel'
  document.getElementById('gjs')?.appendChild(panelEl);
  sharedContainer.appendChild(panelE2);
  sharedContainer.appendChild(panelE3);
  // document.getElementById('gjs')?.appendChild(panelE4);
  const style = document.createElement('style');
style.innerHTML = `
.gjs-pn-active .dropdown-arrow {
  transform: rotate(180deg) translate(10px, 10px) !important;
}

.gjs-pn-oba-custom-panel
{
z-index: 2;
}
.gjs-pn-ctat-custom-panel
{
z-index: 2;
}
.gjs-pn-my-custom-panel
{
z-index: 2;
}
.gjs-pn-custom-ota-panel
{
z-index: 2;
}
.gjs-pn-custom-osa-panel
{
z-index: 2;
}
    #my-custom-layers {
    position: absolute;
    left: 0px;
    top:47px;
    margin-top: 0;
    background-color: #182444;
    min-width: 211px;
    width: fit-content;
    height: 100vh;
  animation: fall 0.2s ease-out forwards;
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


    #oba-custom-panel{
    left: 340px ;    
    position: absolute;
      z-index: 1000;
    top:47px;
    margin-top: 0;
    background-color: #182444;  
    width: 500px;
    height: 40vh;
    animation: fall 0.2s ease-out forwards;

    }

    .gjs-title{
    display: none
    }

    #ctat-custom-panel{
    left: 400px ;    
    position: absolute;
      z-index: 1000;
    top:47px;
    margin-top: 0;
    background-color: #182444;
    width: 200px;
    height: 40vh;
    }

    #custom-ota-panel{
        position: fixed;
        right:0px;
    top:50px;
    margin-top: 0;
    background-color: #182444;
    width: 15%;
    height: 10vh;
    }

    #custom-osa-panel{
        position: fixed;
        right:0px;
    top:140px;
    margin-top: 0;
    background-color: #182444;
    width: 15%;
    height:85vh
    overflow:scroll;
    }
       .gjs-layer-item{
    height: 20px;
    border-bottom: none;
    } 
.gjs-pn-devices-c {
  padding: 0px;

  .gjs-pn-buttons {
    height: 100%;

  }

  .gjs-pn-btn {
    margin-right: 0px;
    height: 100%;
    padding-left:15px;
    padding-right:15px;
    
    display: flex;
    align-items: center;
    
    border-right: 1px solid #1C2F61;
    
    &:nth-last-child(4){
    border-right: none;
    }
        
    &:nth-last-child(5){
    border-right: none;
    }
    &:last-child {
      border-right: none;
    }
  }
}

.gjs-block {
    width: 20% !important;
    aspect-ratio: 1 / 1 !important;
    min-height: 0px !important;
}
`
  ;
  document.getElementsByTagName('head')[0].appendChild(style);
  editor.on('load', () => {
    panelEl.style.display = 'block';
    panelE2.style.display = 'block';
    panelE3.style.display = 'block';
  });
  editor.on('load', () => {
    editor.runCommand('osa-override');
    editor.runCommand('ota-override');
  });


  opts.showStylesOnChange && editor.on('component:selected', () => {
    const openSmBtn = Panels.getButton('views', osm);
    const openLayersBtn = Panels.getButton('views', ola);
  

    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn?.set('active', true);
    }
  });
}