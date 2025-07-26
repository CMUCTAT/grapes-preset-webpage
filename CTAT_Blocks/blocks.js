export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  const CTATAudioButton = {
    type: "CTATAudioButton",
    attributes: {
      class: 'CTATAudioButton'
    },
    resizable: true,
    draggable: true,
    droppbale: false, 
  };

  const CTATButton = {
    type: "CTATButton",
    attributes: {
      class: 'CTATButton'
    },
    resizable: true,
    draggable: true,
    droppbale: false, 
  };

  const CTATCheckBox = {
    type: "CTATCheckBox",
    attributes: {
      class: 'CTATCheckBox'
    },
    draggable: true,
    droppbale: false, 
  };
  
  const CTATComboBox = {
    type: "CTATComboBox",
    attributes: {
      class: 'CTATComboBox'
    },
    resizable: true,
    draggable: true,
    droppbale: false, 
  };

  const CTATDoneButton = {
    type: "CTATDoneButton",
    attributes: {
      class: 'CTATDoneButton',
      id: "done"
    },
    draggable: true,
    droppbale: false, 
  };
  

  const CTATDragNDrop = {
    type: "CTATDragNDrop",
    attributes: {
      class: 'CTATDragNDrop'
    },
    draggable: true,
    resizable: true,
  };

  const CTATFractionBar = {
    type: "CTATFractionBar",
    attributes: {
      class: 'CTATFractionBar'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATGroupingComponent = {
    type: "CTATGroupingComponent",
    attributes: {
      class: 'CTATGroupingComponent',
    },
    draggable: true,
    droppbale: true, 
    resizable: true,
  };


  const CTATHintButton = {
    type: "CTATHintButton",
    attributes: {
      class: 'CTATHintButton'
    },
    draggable: true,
    droppbale: false, 
  };

  const CTATHintWindow = {
    type: "CTATHintWindow",
    attributes: {
      class: 'CTATHintWindow'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATImageButton = {
    type: "CTATImageButton",
    attributes: {
      class: 'CTATImageButton'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATJumble =
  {
    type: "CTATJumble",
    attributes: {
      class: 'CTATJumble'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATNLPInput =
  {
    type: "CTATNLPInput",
    attributes: {
      class: 'CTATNLPInput'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATNumberLine = {
    type: "CTATNumberLine",
    attributes: {
      class: 'CTATNumberLine'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATNumericStepper = {
    type: "CTATNumericStepper",
    attributes: {
      class: 'CTATNumericStepper'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATPieChart = {
    type: "CTATPieChart",
    attributes: {
      class: 'CTATPieChart'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATRadioButton = {
    type: "CTATRadioButton",
    attributes: {
      class: 'CTATRadioButton'
    },
    draggable: true,
    droppbale: false, 
    resizable: true,
  };


  const CTATSkillWindow = {
    type: "CTATSkillWindow",
    attributes: {
      class: 'CTATSkillWindow'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATSubmitButton = {
    type: "CTATSubmitButton",
    attributes: {
      class: 'CTATSubmitButton'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATTable = {
    type: "CTATTable",
    attributes: {
      class: 'CTATTable'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATTextArea = {
    type: "CTATTextArea",
    attributes: {
      class: 'CTATTextArea'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATTextField = {
    type: "CTATTextField",
    attributes: {
      class: 'CTATTextField'
    },
    editable: 'true',
    content: 'Insert Text Here',
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATTextInput = {
    type: "CTATTextInput",
    attributes: {
      class: 'CTATTextInput'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  const CTATVideo = {
    type: "CTATVideo",
    attributes: {
      class: 'CTATVideo'
    },
    draggable: true,
    resizable: true,
    droppbale: false, 
  };

  // … somewhere after your existing Basic Text Components (Line, flexBox, plainBox, etc.)

  bm.add('flexBox', {
    label: 'Flexbox',
    category: 'Basic Containers',
    content: `<div class="flexbox" data-gjs-resizable="true"> 
              </div>`,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#b9a5a6"><path d="M26.875,26.875v118.25h118.25v-118.25zM37.625,37.625h96.75v96.75h-96.75z"></path></g></g></svg>

 
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });

  bm.add('Flex Column', {
    label: 'Flex Column',
    category: 'Basic Containers',
    content: `<div class="flexcolumn" data-gjs-resizable="true"></div>`
    ,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="43"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M27.70192,0c-3.97956,0 -6.61538,2.63582 -6.61538,6.61538v158.76923c0,3.97957 2.63582,6.61538 6.61538,6.61538h79.38462c3.97957,0 6.61538,-2.63581 6.61538,-6.61538v-22.53365c-4.6256,-1.31791 -9.2512,-2.53245 -13.23077,-5.16827v21.08654h-66.15385v-145.53846h66.15385v21.08654c3.97957,-1.98978 8.60517,-3.8762 13.23077,-4.54808v-23.15385c0,-3.97956 -2.63581,-6.61538 -6.61538,-6.61538zM126.93269,40.93269c-25.14363,0 -44.86058,19.92368 -44.86058,45.06731c0,25.14363 20.38882,45.06731 44.86058,45.06731c24.47176,0 45.06731,-20.59555 45.06731,-45.06731c0,-24.47176 -19.92368,-45.06731 -45.06731,-45.06731zM120.31731,59.53846h13.23077v19.84615h19.84615v13.23077h-19.84615v19.84615h-13.23077v-19.84615h-19.84615v-13.23077h19.84615z"></path></g></g></svg>    
    <div class="gjs-block-label" style="margin-top:5px;">${model.get('label')}</div>
    </div>
  </div>`,
  });

  bm.add('flexRow', {
    label: 'Flex Row',
    category: 'Basic Containers',
    content: `<section class="flexrow" data-gjs-resizable="true"> 

              </section>`,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="64" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M8.0625,43c-4.44067,0 -8.0625,3.62183 -8.0625,8.0625v64.5c0,4.44067 3.62183,8.0625 8.0625,8.0625h45.82397c1.38574,18.00415 16.45044,32.25 34.80103,32.25c18.35059,0 33.41528,-14.24585 34.80103,-32.25h40.44897c4.44067,0 8.0625,-3.62183 8.0625,-8.0625v-64.5c0,-4.44067 -3.62183,-8.0625 -8.0625,-8.0625zM8.0625,48.375h155.875c1.48022,0 2.6875,1.20728 2.6875,2.6875v64.5c0,1.48022 -1.20728,2.6875 -2.6875,2.6875h-40.44897c-1.31226,-17.12232 -14.99121,-30.80127 -32.11353,-32.11353v-29.69897c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v29.69897c-17.12232,1.31226 -30.80127,14.99121 -32.11353,32.11353h-45.82397c-1.48022,0 -2.6875,-1.20728 -2.6875,-2.6875v-64.5c0,-1.48022 1.20728,-2.6875 2.6875,-2.6875zM13.4375,53.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h5.375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM45.6875,53.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v53.75c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-53.75c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM131.6875,53.75c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v53.75c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-53.75c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM13.4375,67.1875c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h5.375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM13.4375,80.625c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h5.375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM88.6875,91.375c16.30347,0 29.5625,13.25903 29.5625,29.5625c0,16.30347 -13.25903,29.5625 -29.5625,29.5625c-16.30347,0 -29.5625,-13.25903 -29.5625,-29.5625c0,-16.30347 13.25903,-29.5625 29.5625,-29.5625zM13.4375,94.0625c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h5.375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM88.6875,102.125c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v13.4375h-13.4375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h13.4375v13.4375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-13.4375h13.4375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875h-13.4375v-13.4375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM13.4375,107.5c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875c0,1.48022 1.19678,2.6875 2.6875,2.6875h5.375c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875z"></path></g></g></svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });

  bm.add('Line', {
    label: 'Line',
    category: 'Basic Containers',
    content: `<hr data-gjs-resizable='true'>`,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M6.88,79.12v13.76h158.24v-13.76z"></path></g></g></svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    
    </div>
  </div>`,
  });

  bm.add('plainBox', {
    label: 'Plainbox',
    category: 'Basic Containers',
    content: `<div class="plainbox" data-gjs-resizable="true"> 
              </div>`,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#b9a5a6"><path d="M26.875,26.875v118.25h118.25v-118.25zM37.625,37.625h96.75v96.75h-96.75z"></path></g></g></svg>

 
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });

  bm.add('Table', {
    label: '3x3 Table',
    category: 'Basic Containers',
    content: `<table data-gjs-resizable="true" style="min-height:100px;">
    <tr class="tablerow" data-gjs-resizable="true">
      <th class="tablehead" data-gjs-resizable="true" style="height:30px;"></th>
      <th class="tablehead" data-gjs-resizable="true" style="height:30px;"></th>
      <th class="tablehead" data-gjs-resizable="true" style="height:30px;"></th>
    </tr>
    <tr class="tablerow" data-gjs-resizable="true">
      <td class="tablecell" data-gjs-resizable="true" style="height:30px;"></td>
      <td class="tablecell" data-gjs-resizable="true" style="height:30px;"></td>
      <td class="tablecell" data-gjs-resizable="true" style="height:30px;"></td>
    </tr>
    <tr class="tablerow" data-gjs-resizable="true">
      <td class="tablecell" data-gjs-resizable="true" style="height:30px;"></td>
      <td class="tablecell" data-gjs-resizable="true" style="height:30px;"></td>
      <td class="tablecell" data-gjs-resizable="true" style="height:30px;"></td>
    </tr>
  </table>`,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="48" height="48"
  viewBox="0 0 172 172"
  style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M26.875,26.875v118.25h118.25v-118.25zM37.625,37.625h26.875v26.875h-26.875zM75.25,37.625h21.5v26.875h-21.5zM107.5,37.625h26.875v26.875h-26.875zM37.625,75.25h26.875v21.5h-26.875zM75.25,75.25h21.5v21.5h-21.5zM107.5,75.25h26.875v21.5h-26.875zM37.625,107.5h26.875v26.875h-26.875zM75.25,107.5h21.5v26.875h-21.5zM107.5,107.5h26.875v26.875h-26.875z"></path></g></g></svg>  <div class="gjs-block-label">${model.get('label')}</div>
  </div>
</div>`,
  });

  bm.add('CTATAudioButton', {
    label: 'Audio Button',
    category: 'CTAT Components',
    content: CTATAudioButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="50" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M83.0975,10.32c-1.04812,0 -2.08281,0.215 -3.1175,0.5375c-2.08281,0.65844 -4.07156,1.89469 -5.805,3.655l-40.42,40.42h-23.435c-5.73781,0 -10.4275,4.68969 -10.4275,10.4275v41.28c0,5.73781 4.68969,10.4275 10.4275,10.4275h23.435l40.3125,40.0975c3.84313,3.85656 8.77469,5.54969 12.7925,3.655c4.04469,-1.90812 6.02,-6.50375 6.02,-11.825v-127.28c0,-5.16 -2.63375,-9.44656 -6.665,-10.8575c-1.00781,-0.34937 -2.06937,-0.5375 -3.1175,-0.5375zM83.205,17.2c0.34938,0 0.61813,0.02688 0.86,0.1075c0.98094,0.33594 1.935,1.20938 1.935,4.4075v127.28c0,3.66844 -1.20937,5.30781 -2.0425,5.6975c-0.83312,0.38969 -2.51281,0.43 -5.16,-2.2575l-43.3225,-43.3225c-0.06719,-0.04031 -0.14781,-0.08062 -0.215,-0.1075c0.25531,0.22844 -0.86,-1.94844 -0.86,-3.225v-39.56c0,-1.27656 1.15563,-3.48031 0.86,-3.225c0.08063,-0.06719 0.14781,-0.13437 0.215,-0.215l43.5375,-43.43c1.6125,-1.62594 3.13094,-2.13656 4.1925,-2.15zM131.6875,23.435c-1.505,0.25531 -2.66062,1.47813 -2.83531,2.99656c-0.16125,1.51844 0.67188,2.96969 2.08281,3.56094c20.46531,10.32 34.4,31.48406 34.4,56.0075c0,24.52344 -13.93469,45.6875 -34.4,56.0075c-1.26312,0.43 -2.15,1.55875 -2.29781,2.87563c-0.14781,1.33031 0.48375,2.62031 1.62594,3.31906c1.12875,0.68531 2.56656,0.65844 3.68187,-0.06719c22.70938,-11.46219 38.27,-34.97781 38.27,-62.135c0,-27.15719 -15.56062,-50.67281 -38.27,-62.135c-0.59125,-0.33594 -1.26312,-0.48375 -1.935,-0.43c-0.1075,0 -0.215,0 -0.3225,0zM119.4325,41.71c-1.53187,0.18813 -2.75469,1.38406 -2.96969,2.91594c-0.22844,1.51844 0.59125,3.01 2.00219,3.64156c13.42406,7.24281 22.575,21.37906 22.575,37.7325c0,16.29969 -9.11062,30.47625 -22.4675,37.7325c-1.66625,0.91375 -2.27094,3.01 -1.34375,4.67625c0.91375,1.66625 3.01,2.27094 4.67625,1.34375c15.50688,-8.42531 26.015,-24.88625 26.015,-43.7525c0,-18.92 -10.535,-35.44812 -26.1225,-43.86c-0.61812,-0.34937 -1.33031,-0.49719 -2.0425,-0.43c-0.1075,0 -0.215,0 -0.3225,0zM10.32,62.0275h17.845c-0.44344,1.31688 -0.645,2.75469 -0.645,4.1925v39.56c0,1.43781 0.215,2.86219 0.645,4.1925h-17.845c-1.85437,0 -3.3325,-1.47812 -3.3325,-3.3325v-41.28c0,-1.85437 1.47813,-3.3325 3.3325,-3.3325zM105.0275,63.3175c-1.66625,0.20156 -2.92937,1.57219 -3.01,3.25188c-0.08062,1.66625 1.04813,3.15781 2.6875,3.52062c7.04125,1.84094 12.255,8.26406 12.255,15.91c0,7.64594 -5.21375,14.06906 -12.255,15.91c-1.84094,0.47031 -2.94281,2.35156 -2.4725,4.1925c0.47031,1.84094 2.35156,2.94281 4.1925,2.4725c10.01094,-2.62031 17.415,-11.78469 17.415,-22.575c0,-10.79031 -7.40406,-19.95469 -17.415,-22.575c-0.45687,-0.13437 -0.92719,-0.16125 -1.3975,-0.1075z"></path></g></g></svg>        <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,

      });


  bm.add('CTATButton', {
    label: 'Button',
    category: 'CTAT Components',
    content: CTATButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M14.33333,50.16667c-7.83362,0 -14.33333,6.49972 -14.33333,14.33333v43c0,7.83362 6.49972,14.33333 14.33333,14.33333h143.33333c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-43c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM14.33333,64.5h143.33333v43h-143.33333zM50.16667,78.83333v14.33333h14.33333v-14.33333zM78.83333,78.83333v14.33333h14.33333v-14.33333zM107.5,78.83333v14.33333h14.33333v-14.33333z"></path></g></g></svg>
<div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });



  bm.add('CTATCheckBox', {
    label: 'CheckBox',
    category: 'CTAT Components',
    content: CTATCheckBox,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="64" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M37.625,21.5c-8.86035,0 -16.125,7.26465 -16.125,16.125v96.75c0,8.86035 7.26465,16.125 16.125,16.125h96.75c8.86035,0 16.125,-7.26465 16.125,-16.125v-96.75c0,-8.86035 -7.26465,-16.125 -16.125,-16.125zM37.625,32.25h96.75c3.02344,0 5.375,2.35156 5.375,5.375v96.75c0,3.02344 -2.35156,5.375 -5.375,5.375h-96.75c-3.02344,0 -5.375,-2.35156 -5.375,-5.375v-96.75c0,-3.02344 2.35156,-5.375 5.375,-5.375zM121.14746,54.00196l-45.89746,45.89746l-24.43945,-24.39746l-7.55859,7.55859l31.99804,32.04003l53.54004,-53.54003z"></path></g></g></svg>
    
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });

  bm.add('CTATComboBox', {
    label: 'Combo Box',
    category: 'CTAT Components',
    content: CTATComboBox,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M26.875,10.75c-8.86035,0 -16.125,7.26465 -16.125,16.125v107.5c0,8.86035 7.26465,16.125 16.125,16.125h107.5c8.86035,0 16.125,-7.26465 16.125,-16.125v-107.5c0,-8.86035 -7.26465,-16.125 -16.125,-16.125zM26.875,21.5h107.5c3.02344,0 5.375,2.35156 5.375,5.375v107.5c0,3.02344 -2.35156,5.375 -5.375,5.375h-107.5c-3.02344,0 -5.375,-2.35156 -5.375,-5.375v-107.5c0,-3.02344 2.35156,-5.375 5.375,-5.375zM46.7793,59.88086l-7.55859,7.60058l41.40429,41.40429l41.44629,-41.40429l-7.64258,-7.60058l-33.80371,33.8457z"></path></g></g></svg><div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });

  bm.add('CTATDragNDrop', {
    label: 'Drag N Drop',
    category: 'CTAT Components',
    content: CTATDragNDrop,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M20.64,17.2c-0.04472,0 -0.07966,0.02688 -0.12094,0.02688c-0.05848,0.00344 -0.11621,-0.0036 -0.17469,0.00672c-0.12384,0.00688 -0.2257,0.07342 -0.34266,0.09406c-0.28552,0.05504 -0.57185,0.09804 -0.82641,0.215c-0.18232,0.086 -0.33207,0.21226 -0.49719,0.32922c-0.19608,0.1376 -0.38926,0.25456 -0.55094,0.43c-0.11352,0.11696 -0.18931,0.26225 -0.28219,0.39641c-0.15824,0.22704 -0.31352,0.45075 -0.40984,0.71219c-0.05848,0.15824 -0.06638,0.32535 -0.10078,0.49047c-0.04472,0.21328 -0.13438,0.4114 -0.13438,0.63156v13.975c0,1.83008 1.548,3.3325 3.44,3.3325c1.892,0 3.44,-1.50242 3.44,-3.3325v-10.4275h13.8675c1.83352,0 3.3325,-1.548 3.3325,-3.44c0,-1.892 -1.49898,-3.44 -3.3325,-3.44h-17.00516c-0.07912,0 -0.15604,0.01 -0.23516,0.01344c-0.02408,0 -0.04311,-0.01344 -0.06719,-0.01344zM51.4925,17.2c-1.83008,0 -3.3325,1.548 -3.3325,3.44c0,1.892 1.50242,3.44 3.3325,3.44h7.095c1.83008,0 3.3325,-1.548 3.3325,-3.44c0,-1.892 -1.50242,-3.44 -3.3325,-3.44zM72.1325,17.2c-1.83008,0 -3.3325,1.548 -3.3325,3.44c0,1.892 1.50242,3.44 3.3325,3.44h7.095c1.83008,0 3.3325,-1.548 3.3325,-3.44c0,-1.892 -1.50242,-3.44 -3.3325,-3.44zM92.7725,17.2c-1.83008,0 -3.3325,1.548 -3.3325,3.44c0,1.892 1.50242,3.44 3.3325,3.44h7.095c1.83008,0 3.3325,-1.548 3.3325,-3.44c0,-1.892 -1.50242,-3.44 -3.3325,-3.44zM113.4125,17.2c-1.83352,0 -3.3325,1.548 -3.3325,3.44c0,1.892 1.49898,3.44 3.3325,3.44h13.8675v10.4275c0,1.83008 1.548,3.3325 3.44,3.3325c1.892,0 3.44,-1.50242 3.44,-3.3325v-13.975c0,-0.22016 -0.08966,-0.415 -0.13437,-0.62484c-0.0344,-0.16512 -0.0423,-0.33895 -0.10078,-0.49719c-0.09632,-0.26144 -0.25161,-0.47843 -0.40985,-0.70547c-0.09288,-0.13416 -0.17211,-0.28272 -0.28219,-0.40312c-0.16168,-0.17544 -0.36158,-0.2924 -0.55766,-0.43c-0.16512,-0.11696 -0.31143,-0.24666 -0.49719,-0.32922c-0.25456,-0.11696 -0.53761,-0.15996 -0.81969,-0.215c-0.11696,-0.02064 -0.21881,-0.08718 -0.34265,-0.09406c-0.05848,-0.01032 -0.11621,-0.00328 -0.17469,-0.00672c-0.04128,0 -0.07622,-0.02688 -0.12094,-0.02688c-0.02408,0 -0.04311,0.01344 -0.06719,0.01344c-0.07912,-0.00344 -0.15604,-0.01344 -0.23516,-0.01344zM20.64,44.72c-1.892,0 -3.44,1.50242 -3.44,3.3325v7.095c0,1.83008 1.548,3.3325 3.44,3.3325c1.892,0 3.44,-1.50242 3.44,-3.3325v-7.095c0,-1.83008 -1.548,-3.3325 -3.44,-3.3325zM130.72,44.72c-1.892,0 -3.44,1.50242 -3.44,3.3325v7.095c0,1.83008 1.548,3.3325 3.44,3.3325c1.892,0 3.44,-1.50242 3.44,-3.3325v-7.095c0,-1.83008 -1.548,-3.3325 -3.44,-3.3325zM20.64,65.36c-1.892,0 -3.44,1.50242 -3.44,3.3325v7.095c0,1.83008 1.548,3.3325 3.44,3.3325c1.892,0 3.44,-1.50242 3.44,-3.3325v-7.095c0,-1.83008 -1.548,-3.3325 -3.44,-3.3325zM61.92,65.36c-7.55883,0 -13.76,6.20117 -13.76,13.76v65.36c0,7.55883 6.20117,13.76 13.76,13.76h82.56c7.55883,0 13.76,-6.20117 13.76,-13.76v-65.36c0,-7.55883 -6.20117,-13.76 -13.76,-13.76zM61.92,72.24h82.56c3.84133,0 6.88,3.03867 6.88,6.88v65.36c0,3.84133 -3.03867,6.88 -6.88,6.88h-82.56c-3.84133,0 -6.88,-3.03867 -6.88,-6.88v-65.36c0,-3.84133 3.03867,-6.88 6.88,-6.88zM20.64,86c-1.892,0 -3.44,1.50242 -3.44,3.3325v7.095c0,1.83008 1.548,3.3325 3.44,3.3325c1.892,0 3.44,-1.50242 3.44,-3.3325v-7.095c0,-1.83008 -1.548,-3.3325 -3.44,-3.3325zM96.32,92.88v34.4l8.32453,-7.08156l5.2339,12.24156l4.4075,-1.95515l-5.53625,-12.06016l11.65031,-1.46469zM20.64,106.64c-1.892,0 -3.44,1.49898 -3.44,3.3325v13.56515c0,0.07912 0.01,0.15604 0.01344,0.23516c0,0.02408 -0.01344,0.04311 -0.01344,0.06719c0,0.04472 0.02688,0.07966 0.02688,0.12094c0.00344,0.05848 -0.0036,0.11621 0.00672,0.17469c0.00688,0.12384 0.07342,0.22569 0.09406,0.34265c0.05504,0.28208 0.09804,0.56513 0.215,0.81969c0.08256,0.18576 0.21226,0.33207 0.32922,0.49719c0.1376,0.19608 0.25456,0.39598 0.43,0.55766c0.1204,0.11008 0.26897,0.18931 0.40312,0.28219c0.22704,0.15824 0.44403,0.31353 0.70547,0.40985c0.15824,0.05848 0.33207,0.06638 0.49719,0.10078c0.20984,0.04472 0.40468,0.13437 0.62484,0.13437h17.415c1.83008,0 3.3325,-1.548 3.3325,-3.44c0,-1.892 -1.50242,-3.44 -3.3325,-3.44h-13.8675v-10.4275c0,-1.83352 -1.548,-3.3325 -3.44,-3.3325z"></path></g></g></svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,
  });
  
  
  bm.add('CTATDoneButton', {
    label: 'Done Button',
    category: 'CTAT Components',
    content: CTATDoneButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><defs><linearGradient x1="76.11358" y1="140.61358" x2="12.68858" y2="77.18858" gradientUnits="userSpaceOnUse" id="color-1_VFaz7MkjAiu0_gr1"><stop offset="0.108" stop-color="#b9a5a6"></stop><stop offset="0.433" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="159.13689" y1="34.36377" x2="52.28084" y2="141.22356" gradientUnits="userSpaceOnUse" id="color-2_VFaz7MkjAiu0_gr2"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M59.47975,148.42167l-53.81808,-53.81808c-2.7735,-2.7735 -2.7735,-7.267 0,-10.0405l14.40142,-14.40142c2.7735,-2.7735 7.267,-2.7735 10.0405,0l53.81808,53.81808c2.7735,2.7735 2.7735,7.267 0,10.0405l-14.40142,14.40142c-2.7735,2.76992 -7.267,2.76992 -10.0405,0z" fill="url(#color-1_VFaz7MkjAiu0_gr1)"></path><path d="M45.07833,123.97975l96.81808,-96.81808c2.7735,-2.7735 7.267,-2.7735 10.0405,0l14.40142,14.40142c2.7735,2.7735 2.7735,7.267 0,10.0405l-96.81808,96.81808c-2.7735,2.7735 -7.267,2.7735 -10.0405,0l-14.40142,-14.40142c-2.76992,-2.7735 -2.76992,-7.267 0,-10.0405z" fill="url(#color-2_VFaz7MkjAiu0_gr2)"></path></g></g></svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,
  });

  

  bm.add('CTATFractionBar', {
    label: 'Fraction Bar',
    category: 'CTAT Components',
    content: CTATFractionBar,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M28.14876,42.93001c-11.5025,0 -20.82812,9.32562 -20.82812,20.82813v44.34375c0,11.5025 9.32562,20.82813 20.82813,20.82813h116.01041c11.5025,0 20.82813,-9.32562 20.82813,-20.82813v-44.34375c0,-11.5025 -9.32562,-20.82812 -20.82812,-20.82812zM121.9873,57.24935h22.17187c3.5905,0 6.49479,2.91146 6.49479,6.49479v44.34375c0,3.5905 -2.91146,6.49479 -6.49479,6.49479h-22.17187c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667v-43c0,-3.956 3.21067,-7.16667 7.16667,-7.16667z"></path></g></g></svg>
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,
  });

  bm.add('CTATGroupingComponent', {
    label: 'Grouping Component',
    category: 'CTAT Components',
    content: CTATGroupingComponent
    ,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="64" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><defs><linearGradient x1="86" y1="26.37513" x2="86" y2="144.88312" gradientUnits="userSpaceOnUse" id="color-1_56316_gr1"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="21.5" y1="32.25" x2="21.5" y2="43.05375" gradientUnits="userSpaceOnUse" id="color-2_56316_gr2"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient><linearGradient x1="150.5" y1="32.25" x2="150.5" y2="43.05375" gradientUnits="userSpaceOnUse" id="color-3_56316_gr3"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient><linearGradient x1="21.5" y1="129" x2="21.5" y2="139.80375" gradientUnits="userSpaceOnUse" id="color-4_56316_gr4"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient><linearGradient x1="150.5" y1="129" x2="150.5" y2="139.80375" gradientUnits="userSpaceOnUse" id="color-5_56316_gr5"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient><linearGradient x1="86" y1="51.58388" x2="86" y2="120.529" gradientUnits="userSpaceOnUse" id="color-6_56316_gr6"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M153.1875,124.00663v-76.01325c4.62519,-1.20131 8.0625,-5.375 8.0625,-10.36837c0,-5.92862 -4.82137,-10.75 -10.75,-10.75c-4.99606,0 -9.16706,3.44 -10.36837,8.0625h-108.26325c-1.20131,-4.6225 -5.37231,-8.0625 -10.36837,-8.0625c-5.92862,0 -10.75,4.82138 -10.75,10.75c0,4.99338 3.43731,9.16706 8.0625,10.36838v76.01325c-4.62519,1.20131 -8.0625,5.375 -8.0625,10.36837c0,5.92863 4.82138,10.75 10.75,10.75c4.99606,0 9.16706,-3.44 10.36838,-8.0625h108.26325c1.20131,4.6225 5.37231,8.0625 10.36837,8.0625c5.92863,0 10.75,-4.82137 10.75,-10.75c0,-4.99337 -3.43731,-9.16706 -8.0625,-10.36837zM24.1875,124.00663v-76.01325c3.75981,-0.97825 6.70262,-3.92106 7.68088,-7.68087h108.26325c0.97825,3.75981 3.92106,6.70262 7.68087,7.68088v76.01325c-3.75981,0.97825 -6.70262,3.92106 -7.68087,7.68087h-108.26325c-0.97825,-3.75981 -3.92106,-6.70262 -7.68087,-7.68087z" fill="url(#color-1_56316_gr1)"></path><path d="M21.5,32.25c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-2_56316_gr2)"></path><path d="M150.5,32.25c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-3_56316_gr3)"></path><path d="M21.5,129c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-4_56316_gr4)"></path><path d="M150.5,129c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375z" fill="url(#color-5_56316_gr5)"></path><path d="M34.9375,51.0625h102.125v69.875h-102.125z" fill="url(#color-6_56316_gr6)"></path></g></g></svg> 
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
  });


  bm.add('CTATHintButton', {
    label: 'Hint Button',
    category: 'CTAT Components',
    content: CTATHintButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1"></path><g><path d="M86,165.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55z" fill="#b9a5a6" stroke="none" stroke-width="1"></path><path d="M86,8.6c42.6775,0 77.4,34.7225 77.4,77.4c0,42.6775 -34.7225,77.4 -77.4,77.4c-42.6775,0 -77.4,-34.7225 -77.4,-77.4c0,-42.6775 34.7225,-77.4 77.4,-77.4M86,4.3c-45.1199,0 -81.7,36.5801 -81.7,81.7c0,45.1199 36.5801,81.7 81.7,81.7c45.1199,0 81.7,-36.5801 81.7,-81.7c0,-45.1199 -36.5801,-81.7 -81.7,-81.7z" fill="#b9a5a6" stroke="none" stroke-width="1"></path><path d="M86,120.4c-4.74965,0 -8.6,3.85035 -8.6,8.6c0,4.74965 3.85035,8.6 8.6,8.6c4.74965,0 8.6,-3.85035 8.6,-8.6c0,-4.74965 -3.85035,-8.6 -8.6,-8.6z" fill="#ffffff" stroke="none" stroke-width="1"></path><path d="M66.65,73.1v-8.6c0,-10.6855 8.6645,-19.35 19.35,-19.35v0c10.6855,0 19.35,8.5613 19.35,19.35c0,20.1842 -19.35,20.6099 -19.35,38.7v8.6" fill="none" stroke="#ffffff" stroke-width="12.9"></path></g></g></svg>    
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,
  });

  bm.add('CTATHintWidget', {
    label: 'Hint Widget',
    category: 'CTAT Components',
    content: `
  <section class="HintWidgetRow" data-gjs-resizable="true" style="display: flex; justify-content: center; align-items: center; width: 100%; height: auto; flex-wrap: wrap;"> 
    <div class="HintWidgetButtons" data-gjs-resizable="true" style = "display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; margin-right: 10px; max-width: 68px;">
      <div class="CTATHintButton">
      </div>
      <div class="CTATDoneButton" id='done'>
      </div>
    </div>
    
    <div class="CTATHintWindow" data-gjs-resizable = 'true' style = "margin-right:10px">
    </div>

    <div class="CTATSkillWindow" data-gjs-resizable = 'true'>
    </div>

  </section>
  `,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#b9a5a6"><path d="M13.4375,21.5c-4.56875,0 -8.0625,3.73231 -8.0625,8.08875v112.73327c0,4.35644 3.49375,8.08875 8.0625,8.08875h145.125c4.56875,0 8.0625,-3.73231 8.0625,-8.08875v-112.73327c0,-4.35644 -3.49375,-8.08875 -8.0625,-8.08875zM13.4375,26.79102h145.125c1.6125,0 2.6875,1.24167 2.6875,2.79773v112.73327c0,1.55606 -1.075,2.80298 -2.6875,2.80298h-145.125c-1.6125,0 -2.6875,-1.24692 -2.6875,-2.80298v-112.73327c0,-1.55606 1.075,-2.79773 2.6875,-2.79773zM18.8125,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM32.25,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM45.6875,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM59.125,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM72.5625,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM86,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM99.4375,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM112.875,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM126.3125,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM139.75,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM153.1875,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM18.8125,48.375c-1.6125,0 -2.6875,1.075 -2.6875,2.6875c0,1.6125 1.075,2.6875 2.6875,2.6875h18.8125v64.5h-18.8125c-1.6125,0 -2.6875,1.075 -2.6875,2.6875c0,1.6125 1.075,2.6875 2.6875,2.6875h134.375c1.6125,0 2.6875,-1.075 2.6875,-2.6875c0,-1.6125 -1.075,-2.6875 -2.6875,-2.6875h-18.8125v-64.5h18.8125c1.6125,0 2.6875,-1.075 2.6875,-2.6875c0,-1.6125 -1.075,-2.6875 -2.6875,-2.6875zM43,53.75h86v64.5h-86zM72.40503,59.125c-1.42237,0.08362 -2.53234,1.26267 -2.53003,2.6875v48.375c0.00072,0.96743 0.52129,1.85983 1.36304,2.33664c0.84176,0.47682 1.87482,0.46447 2.70495,-0.03232l40.3125,-24.1875c0.80917,-0.48584 1.30422,-1.3605 1.30422,-2.30432c0,-0.94382 -0.49505,-1.81848 -1.30422,-2.30432l-40.3125,-24.1875c-0.38475,-0.23187 -0.82147,-0.36361 -1.27026,-0.38318c-0.08918,-0.00445 -0.17852,-0.00445 -0.2677,0zM75.25,66.55762l32.40222,19.44238l-32.40222,19.44238zM18.8125,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM32.25,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM45.6875,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM59.125,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM72.5625,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM86,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM99.4375,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM112.875,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM126.3125,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM139.75,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM153.1875,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875z"></path></g></g></svg>
  <div class="gjs-block-label">${model.get('label')}</div>
  </div>  
</div>`,
  });

  bm.add('CTATHintWindow', {
    label: 'Hint Window',
    category: 'CTAT Components',
    content: CTATHintWindow,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M85.6775,6.7725c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.59906,0.36281 -2.72781,1.80063 -2.6875,3.44v10.32c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-10.32c0.04031,-0.99437 -0.36281,-1.94844 -1.075,-2.62031c-0.72562,-0.68531 -1.70656,-1.02125 -2.6875,-0.92719zM16.8775,13.6525c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l6.88,6.88c1.37063,1.37063 3.57438,1.37063 4.945,0c1.37063,-1.37062 1.37063,-3.57437 0,-4.945l-6.88,-6.88c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075zM161.25,13.76c-0.76594,0.08063 -1.49156,0.43 -2.0425,0.9675l-6.88,6.88c-1.37062,1.37063 -1.37062,3.57438 0,4.945c1.37063,1.37063 3.57438,1.37063 4.945,0l6.88,-6.88c1.11531,-1.03469 1.41094,-2.67406 0.73906,-4.03125c-0.65844,-1.37062 -2.15,-2.12312 -3.64156,-1.88125zM23.435,41.28c-1.63937,0.30906 -2.82187,1.76031 -2.795,3.44v26.015l-12.7925,12.7925c-0.67187,0.645 -1.04812,1.54531 -1.04812,2.4725c0,0.92719 0.37625,1.8275 1.04812,2.4725l12.7925,12.7925v26.015c0,1.89469 1.54531,3.44 3.44,3.44h130.72c1.89469,0 3.44,-1.54531 3.44,-3.44v-82.56c0,-1.89469 -1.54531,-3.44 -3.44,-3.44h-130.72c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM27.52,48.16h123.84v75.68h-123.84v-24.08c0.02688,-0.91375 -0.3225,-1.81406 -0.9675,-2.4725l-11.2875,-11.2875l11.2875,-11.2875c0.645,-0.65844 0.99438,-1.55875 0.9675,-2.4725zM54.0725,65.36c-1.89469,0.26875 -3.225,2.02906 -2.95625,3.92375c0.26875,1.89469 2.02906,3.225 3.92375,2.95625h68.8c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-68.8c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM54.0725,82.56c-1.89469,0.26875 -3.225,2.02906 -2.95625,3.92375c0.26875,1.89469 2.02906,3.225 3.92375,2.95625h55.04c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-55.04c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM54.0725,99.76c-1.89469,0.26875 -3.225,2.02906 -2.95625,3.92375c0.26875,1.89469 2.02906,3.225 3.92375,2.95625h68.8c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-68.8c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM154.4775,144.3725c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l6.88,6.88c1.37063,1.37063 3.57438,1.37063 4.945,0c1.37063,-1.37062 1.37063,-3.57437 0,-4.945l-6.88,-6.88c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075zM23.65,144.48c-0.76594,0.08063 -1.49156,0.43 -2.0425,0.9675l-6.88,6.88c-1.37062,1.37063 -1.37062,3.57438 0,4.945c1.37063,1.37063 3.57438,1.37063 4.945,0l6.88,-6.88c1.11531,-1.03469 1.41094,-2.67406 0.73906,-4.03125c-0.65844,-1.37062 -2.15,-2.12312 -3.64156,-1.88125zM85.6775,147.8125c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.59906,0.36281 -2.72781,1.80063 -2.6875,3.44v10.32c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-10.32c0.04031,-0.99437 -0.36281,-1.94844 -1.075,-2.62031c-0.72562,-0.68531 -1.70656,-1.02125 -2.6875,-0.92719z"></path></g></g></svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,
  });

  bm.add('CTATImageButton', {
    label: 'Image Button',
    category: 'CTAT Components',
    content: CTATImageButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M28.66667,28.66667c-7.83362,0 -14.33333,6.49972 -14.33333,14.33333v86c0,7.83362 6.49972,14.33333 14.33333,14.33333h114.66667c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-86c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v86h-114.66667zM71.66667,57.33333c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM103.91667,78.83333l-25.08333,28.66667l-17.91667,-17.91667l-19.51237,25.08333h89.38737z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,  
    // media: '<svg>...</svg>',
  });

  bm.add('CTATJumble', {
    label: 'Jumble',
    category: 'CTAT Components',
    content: CTATJumble,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M28.66667,21.5c-3.95788,0.0004 -7.16627,3.20879 -7.16667,7.16667v114.66667c0.0004,3.95788 3.20879,7.16627 7.16667,7.16667h43c3.95788,-0.0004 7.16627,-3.20879 7.16667,-7.16667v-35.83333h-14.33333v28.66667h-28.66667v-100.33333h28.66667v28.66667h14.33333v-35.83333c-0.0004,-3.95788 -3.20879,-7.16627 -7.16667,-7.16667zM100.33333,21.5c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v15.5651l10.13411,10.13411l4.19922,4.19922v-22.73177h28.66667v100.33333h-28.66667v-22.73177l-4.19922,4.19922l-10.13411,10.13412v15.5651c0,3.956 3.21067,7.16667 7.16667,7.16667h43c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-114.66667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667zM93.16667,64.5v14.33333h-43v14.33333h43v14.33333l21.5,-21.5z"></path></g></g></svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,  
  });

  bm.add('CTATNLPInput', {
    label: 'NLP Input',
    category: 'CTAT Components',
    content: CTATNLPInput,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 43" style="fill:#000000;">
        <g fill="none" stroke="#b9a5a6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
          <path d="M40.79 32.775a10 10 0 0 0-4.78-18.78h-2.52a16 16 0 1 0-27.48 14.6m7.54-3.677v-3.692h19.69v3.692m-13.538 16h7.385m-3.693-19.692v19.692"/>
        </g>
      </svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,  
  });

  bm.add('CTATNumberLine', {
    label: 'Number Line',
    category: 'CTAT Components',
    content: CTATNumberLine,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;">
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#b9a5a6">
          <path d="M40.85,55.00977l-30.99023,30.99023l30.99023,30.99024v-18.09024h90.3v18.09024l30.99024,-30.99024l-30.99024,-30.99023v18.09023h-90.3zM36.55,65.39024v12.00976h98.9v-12.00976l20.60977,20.60976l-20.60977,20.60977v-12.00977h-98.9v12.00977l-20.60976,-20.60977zM38.7,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM47.3,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM55.9,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM73.1,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM81.7,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM90.3,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM98.9,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM107.5,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM116.1,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM124.7,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM133.3,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15z"></path>
        </g>
      </g>
    </svg>
    
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,  
  });

  bm.add('CTATNumericStepper', {
    label: 'Numeric Stepper',
    category: 'CTAT Components',
    content: CTATNumericStepper,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M45.6875,26.875c-10.32,0 -18.8125,8.4925 -18.8125,18.8125v2.6875h10.75v-2.6875c0,-4.73 3.3325,-8.0625 8.0625,-8.0625h5.375c4.73,0 8.0625,3.3325 8.0625,8.0625c0,2.4725 -1.87831,5.26666 -5.04956,7.20166c-6.61125,4.085 -12.42003,6.71875 -17.31128,9.40625c-2.41875,1.3975 -4.62628,2.69212 -6.56128,4.73462c-1.88125,2.0425 -3.32788,5.10247 -3.32788,8.21997v5.375h43v-10.75h-24.51294c3.92375,-2.0425 8.49082,-4.08206 14.40332,-7.73706c5.4825,-3.38625 10.10962,-9.24794 10.10962,-16.45044c0,-10.32 -8.4925,-18.8125 -18.8125,-18.8125zM123.625,29.5625l-3.87378,3.70581l-23.00122,23.16919l7.57959,7.57959l13.92041,-13.9729v100.45581h10.75v-100.45581l13.92041,13.9729l7.57959,-7.57959l-23.00122,-23.16919zM46.17041,91.375l-0.80835,4.18872c0,0 -0.90619,3.11834 -3.00244,6.23584c-2.15,3.1175 -4.84212,5.70044 -10.10962,5.70044v10.75c7.4175,0 12.47,-3.65584 16.125,-7.57959v34.45459h10.75v-53.75z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,  
  });


  bm.add('CTATPieChart', {
    label: 'Pie Chart',
    category: 'CTAT Components',
    content: CTATPieChart,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M85.96305,24.11695c-34.1771,0 -61.92,27.7429 -61.92,61.92c0,34.1771 27.7429,61.92 61.92,61.92c34.1771,0 61.92,-27.7429 61.92,-61.92c0,-34.1771 -27.7429,-61.92 -61.92,-61.92zM84.28,27.60063v56.67938h-56.75328c0.91391,-30.94081 25.80284,-55.80363 56.75328,-56.67937zM87.72,27.60063c14.8434,0.43843 28.28544,6.39076 38.35734,15.88984l-38.35734,38.35735zM76.52656,35.28688c-0.04854,0.00151 -0.09686,0.00713 -0.14445,0.0168c-20.77973,3.92183 -37.1516,20.29708 -41.07172,41.07844c-0.06912,0.30711 0.03507,0.62744 0.27162,0.83514c0.23655,0.2077 0.56767,0.26958 0.86326,0.16132c0.29559,-0.10825 0.50843,-0.36934 0.55489,-0.68069c3.78892,-20.08584 19.61369,-35.91386 39.69773,-39.70445c0.44253,-0.07896 0.74961,-0.48536 0.70471,-0.93263c-0.0449,-0.44727 -0.42665,-0.78452 -0.87604,-0.77393zM95.44992,35.28688c-0.4445,0.00234 -0.814,0.343 -0.85235,0.78586c-0.03836,0.44285 0.26706,0.84197 0.70454,0.92071c6.85335,1.29293 13.18824,4.0162 18.74531,7.80719c0.3924,0.26802 0.92777,0.16722 1.19584,-0.22514c0.26807,-0.39237 0.16735,-0.92775 -0.22498,-1.19587c-5.74333,-3.91805 -12.30454,-6.73726 -19.40039,-8.07594c-0.0553,-0.01109 -0.11156,-0.01672 -0.16797,-0.0168zM128.50953,45.92266c9.49908,10.07191 15.45141,23.51395 15.88984,38.35734h-54.24719zM127.89141,56.59875c-0.31862,0.0045 -0.60864,0.1848 -0.75368,0.46853c-0.14504,0.28373 -0.12131,0.6244 0.06164,0.8853c0.40822,0.59974 0.80055,1.21531 1.18922,1.84094c0.15946,0.26661 0.4503,0.4265 0.76084,0.4183c0.31055,-0.0082 0.59254,-0.18323 0.7377,-0.45788c0.14516,-0.27465 0.13094,-0.60624 -0.03721,-0.86745c-0.39565,-0.63685 -0.80184,-1.27306 -1.22953,-1.90141c-0.16134,-0.24452 -0.43605,-0.39011 -0.72898,-0.38633zM131.06602,61.90992c-0.30326,-0.00161 -0.58496,0.15661 -0.7414,0.41641c-0.15644,0.25981 -0.16448,0.5828 -0.02118,0.85007c0.57523,1.10973 1.11529,2.23503 1.60578,3.38289c0.18742,0.43689 0.6935,0.63914 1.1304,0.45176c0.4369,-0.18738 0.6392,-0.69344 0.45187,-1.13036c-0.51054,-1.19478 -1.07196,-2.35707 -1.66289,-3.49711c-0.1451,-0.28855 -0.43961,-0.47148 -0.76258,-0.47367zM133.96852,68.78992c-0.27234,0.01284 -0.52247,0.15405 -0.67416,0.3806c-0.1517,0.22655 -0.18699,0.5116 -0.09513,0.76831c0.75156,2.19204 1.36346,4.44834 1.80062,6.76242c0.08906,0.46662 0.53952,0.77269 1.00613,0.68363c0.46662,-0.08906 0.77269,-0.53952 0.68363,-1.00613c-0.4538,-2.40216 -1.08865,-4.73481 -1.86445,-6.99758c-0.12035,-0.36711 -0.47071,-0.60893 -0.85664,-0.59125zM27.52672,87.72h58.47328h58.39937c-0.89231,31.5359 -26.68305,56.79695 -58.43633,56.79695c-31.75327,0 -57.54402,-25.26106 -58.43633,-56.79695zM36.15023,94.58656c-0.25833,0.0007 -0.50266,0.11747 -0.66546,0.31805c-0.1628,0.20057 -0.22683,0.46369 -0.17439,0.71664c0.2249,1.18773 0.50028,2.35057 0.79953,3.49711c0.06992,0.30599 0.30098,0.5496 0.60285,0.63559c0.30187,0.08599 0.62662,0.0007 0.84728,-0.22252c0.22067,-0.22322 0.30221,-0.54892 0.21276,-0.84979c-0.29243,-1.12042 -0.55723,-2.24518 -0.77266,-3.38289c-0.07204,-0.41271 -0.43097,-0.71348 -0.84992,-0.71219zM135.82289,94.58992c-0.40877,0.01155 -0.75289,0.30932 -0.82305,0.71219c-4.35703,23.10053 -24.62243,40.57789 -48.99984,40.57789c-15.70505,0 -29.69099,-7.2608 -38.83102,-18.60086c-0.19093,-0.24606 -0.49996,-0.36968 -0.80792,-0.32318c-0.30796,0.0465 -0.56672,0.25585 -0.67649,0.54731c-0.10977,0.29146 -0.0534,0.6195 0.14738,0.85759c9.45317,11.72858 23.9327,19.23914 40.16805,19.23914c25.19986,0 46.18176,-18.08191 50.68961,-41.98211c0.05117,-0.25661 -0.01726,-0.52256 -0.18592,-0.72261c-0.16867,-0.20005 -0.41923,-0.31243 -0.68079,-0.30536zM37.9307,101.46992c-0.2721,0.01215 -0.52237,0.15248 -0.67468,0.37829c-0.15231,0.22581 -0.18865,0.51042 -0.09798,0.76726c1.03928,3.0566 2.35848,5.98105 3.92375,8.74781c0.14238,0.28395 0.42967,0.46631 0.74721,0.4743c0.31754,0.00799 0.61364,-0.15969 0.77012,-0.43611c0.15648,-0.27643 0.14786,-0.6166 -0.02241,-0.88475c-1.51353,-2.67532 -2.78865,-5.49911 -3.79273,-8.45219c-0.11881,-0.3672 -0.46766,-0.6103 -0.85328,-0.59461z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`,  
  });

  bm.add('CTATRadioButton', {
    label: 'Radio Button',
    category: 'CTAT Components',
    content: CTATRadioButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M32.25,58.05c-15.41089,0 -27.95,12.53911 -27.95,27.95c0,15.41089 12.53911,27.95 27.95,27.95c15.41089,0 27.95,-12.53911 27.95,-27.95c0,-15.41089 -12.53911,-27.95 -27.95,-27.95zM32.25,62.35c13.087,0 23.65,10.563 23.65,23.65c0,13.087 -10.563,23.65 -23.65,23.65c-13.087,0 -23.65,-10.563 -23.65,-23.65c0,-13.087 10.563,-23.65 23.65,-23.65zM32.25,77.4c-4.72418,0 -8.6,3.87582 -8.6,8.6c0,4.72418 3.87582,8.6 8.6,8.6c4.72418,0 8.6,-3.87582 8.6,-8.6c0,-4.72418 -3.87582,-8.6 -8.6,-8.6zM68.8,79.55v4.3h98.9v-4.3zM32.25,81.7c2.40029,0 4.3,1.89971 4.3,4.3c0,2.40029 -1.89971,4.3 -4.3,4.3c-2.40029,0 -4.3,-1.89971 -4.3,-4.3c0,-2.40029 1.89971,-4.3 4.3,-4.3zM70.95,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM79.55,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM88.15,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM96.75,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM105.35,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM113.95,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM122.55,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM131.15,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM139.75,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM148.35,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM156.95,88.15c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  
  bm.add('CTATSkillWindow', {
    label: 'Skill Window',
    category: 'CTAT Components',
    content: CTATSkillWindow,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><defs><linearGradient x1="67.1875" y1="19.04094" x2="67.1875" y2="140.17194" gradientUnits="userSpaceOnUse" id="color-1_bPQso4J0XSgC_gr1"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="67.1875" y1="19.04094" x2="67.1875" y2="140.17194" gradientUnits="userSpaceOnUse" id="color-2_bPQso4J0XSgC_gr2"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="86" y1="19.04094" x2="86" y2="140.17194" gradientUnits="userSpaceOnUse" id="color-3_bPQso4J0XSgC_gr3"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="86" y1="19.04094" x2="86" y2="140.17194" gradientUnits="userSpaceOnUse" id="color-4_bPQso4J0XSgC_gr4"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="86" y1="19.04094" x2="86" y2="140.17194" gradientUnits="userSpaceOnUse" id="color-5_bPQso4J0XSgC_gr5"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="86" y1="19.04094" x2="86" y2="140.17194" gradientUnits="userSpaceOnUse" id="color-6_bPQso4J0XSgC_gr6"><stop offset="0" stop-color="#b9a5a6"></stop><stop offset="1" stop-color="#b9a5a6"></stop></linearGradient><linearGradient x1="43" y1="51.0625" x2="43" y2="120.9375" gradientUnits="userSpaceOnUse" id="color-7_bPQso4J0XSgC_gr7"><stop offset="0" stop-color="#eae4e4"></stop><stop offset="1" stop-color="#eae4e4"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><rect x="14" y="39" transform="scale(2.6875,2.6875)" width="22" height="2" fill="url(#color-1_bPQso4J0XSgC_gr1)"></rect><rect x="14" y="23" transform="scale(2.6875,2.6875)" width="22" height="2" fill="url(#color-2_bPQso4J0XSgC_gr2)"></rect><rect x="14" y="47" transform="scale(2.6875,2.6875)" width="36" height="2" fill="url(#color-3_bPQso4J0XSgC_gr3)"></rect><rect x="14" y="31" transform="scale(2.6875,2.6875)" width="36" height="2" fill="url(#color-4_bPQso4J0XSgC_gr4)"></rect><rect x="14" y="15" transform="scale(2.6875,2.6875)" width="36" height="2" fill="url(#color-5_bPQso4J0XSgC_gr5)"></rect><path d="M142.4375,21.5h-112.875c-4.44513,0 -8.0625,3.61737 -8.0625,8.0625v112.875c0,4.44512 3.61737,8.0625 8.0625,8.0625h112.875c4.44512,0 8.0625,-3.61738 8.0625,-8.0625v-112.875c0,-4.44513 -3.61737,-8.0625 -8.0625,-8.0625zM145.125,142.4375c0,1.4835 -1.204,2.6875 -2.6875,2.6875h-112.875c-1.4835,0 -2.6875,-1.204 -2.6875,-2.6875v-112.875c0,-1.4835 1.204,-2.6875 2.6875,-2.6875h112.875c1.4835,0 2.6875,1.204 2.6875,2.6875z" fill="url(#color-6_bPQso4J0XSgC_gr6)"></path><path d="M48.375,51.0625v5.375h-10.75v-5.375zM48.375,72.5625v5.375h-10.75v-5.375zM48.375,94.0625v5.375h-10.75v-5.375zM48.375,115.5625v5.375h-10.75v-5.375z" fill="url(#color-7_bPQso4J0XSgC_gr7)"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  bm.add('CTATSubmitButton', {
    label: 'Submit Button',
    category: 'CTAT Components',
    content: CTATSubmitButton,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M94.6,25.04414v33.00586h-79.55v55.9h79.55v33.00586l63.29902,-60.95586l-1.6083,-1.54951zM98.9,35.15586l52.80098,50.84414l-52.80098,50.84414v-27.19414h-79.55v-47.3h79.55zM107.5,51.6c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM113.95,58.05c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM120.4,64.5c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM79.75996,70.77363l-20.57197,19.71533l-9.57422,-9.87236l-4.62754,4.49316l14.03379,14.47471l25.20371,-24.15811zM126.85,70.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM133.3,77.4c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM139.75,83.85c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM133.3,90.3c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM126.85,96.75c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM120.4,103.2c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM113.95,109.65c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM107.5,116.1c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  
  bm.add('CTATTable', {
    label: 'Table',
    category: 'CTAT Components',
    content: CTATTable,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M85.88802,14.23535c-0.34719,0.00752 -0.69337,0.04027 -1.03581,0.09798h-63.35222v7.16667v41.79622c-0.12792,0.77394 -0.12792,1.56363 0,2.33757v40.66243c-0.12792,0.77394 -0.12792,1.56363 0,2.33757v49.03288h63.29622c0.77394,0.12792 1.56363,0.12792 2.33757,0h63.36621v-48.96289c0.12792,-0.77394 0.12792,-1.56363 0,-2.33757v-40.66244c0.12792,-0.77394 0.12792,-1.56363 0,-2.33757v-49.03288h-63.3942c-0.4024,-0.06726 -0.8098,-0.10004 -1.21777,-0.09798zM35.83333,28.66667h43v28.66667h-43zM93.16667,28.66667h43v28.66667h-43zM35.83333,71.66667h43v28.66667h-43zM93.16667,71.66667h43v28.66667h-43zM35.83333,114.66667h43v28.66667h-43zM93.16667,114.66667h43v28.66667h-43z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  bm.add('CTATTextArea', {
    label: 'Text Area',
    category: 'CTAT Components',
    content: CTATTextArea,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M26.875,32.25v10.75h118.25v-10.75zM26.875,64.5v10.75h118.25v-10.75zM26.875,96.75v10.75h118.25v-10.75zM26.875,129v10.75h86v-10.75z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  bm.add('CTATTextInput', {
    label: 'Text Input',
    category: 'CTAT Components',
    content: CTATTextInput,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M12.9,43c-4.72427,0 -8.6,3.87573 -8.6,8.6v68.8c0,4.72427 3.87573,8.6 8.6,8.6h146.2c4.72427,0 8.6,-3.87573 8.6,-8.6v-68.8c0,-4.72427 -3.87573,-8.6 -8.6,-8.6zM12.9,47.3h146.2c2.40083,0 4.3,1.89917 4.3,4.3v68.8c0,2.40083 -1.89917,4.3 -4.3,4.3h-146.2c-2.40083,0 -4.3,-1.89917 -4.3,-4.3v-68.8c0,-2.40083 1.89917,-4.3 4.3,-4.3zM34.4,92.45c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM51.6,92.45c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM68.8,92.45c-2.37482,0 -4.3,1.92518 -4.3,4.3c0,2.37482 1.92518,4.3 4.3,4.3c2.37482,0 4.3,-1.92518 4.3,-4.3c0,-2.37482 -1.92518,-4.3 -4.3,-4.3zM17.2,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM25.8,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM34.4,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM43,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM51.6,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM60.2,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM68.8,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM77.4,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM86,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM94.6,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM103.2,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM111.8,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM120.4,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM129,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM137.6,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM146.2,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15zM154.8,113.95c-1.18741,0 -2.15,0.96259 -2.15,2.15c0,1.18741 0.96259,2.15 2.15,2.15c1.18741,0 2.15,-0.96259 2.15,-2.15c0,-1.18741 -0.96259,-2.15 -2.15,-2.15z"></path></g></g></svg>

    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  bm.add('CTATTextField', {
    label: 'Text Field',
    category: 'CTAT Components',
    content: CTATTextField,
    render: ({ model, className }) => `<div class="${className}__my-wrap">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="48" height="48"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M150.5,21.5v129h-129v-129h129M154.8,17.2h-137.6v137.6h137.6v-137.6z"></path><path d="M139.75,6.45h25.8v25.8h-25.8z"></path><path d="M163.4,8.6v21.5h-21.5v-21.5h21.5M167.7,4.3h-30.1v30.1h30.1v-30.1z"></path><path d="M6.45,6.45h25.8v25.8h-25.8z"></path><path d="M30.1,8.6v21.5h-21.5v-21.5h21.5M34.4,4.3h-30.1v30.1h30.1v-30.1z"></path><path d="M139.75,139.75h25.8v25.8h-25.8z"></path><path d="M163.4,141.9v21.5h-21.5v-21.5h21.5M167.7,137.6h-30.1v30.1h30.1v-30.1z"></path><g><path d="M6.45,139.75h25.8v25.8h-25.8z"></path><path d="M30.1,141.9v21.5h-21.5v-21.5h21.5M34.4,137.6h-30.1v30.1h30.1v-30.1z"></path></g><g><path d="M66.65,126.85v-6.88l12.9,-4.3v-61.92h-21.3796l-3.87,12.9h-4.8504v-21.5h73.1v21.5h-4.8504l-3.87,-12.9h-21.3796v61.92l12.9,4.3v6.88z"></path><path d="M120.4,47.3v8.6v8.6h-1.1008l-2.9498,-9.8341l-0.9202,-3.0659h-3.1992h-17.63h-4.3v4.3v58.222v3.1003l2.9412,0.9804l9.9588,3.3153v3.182h-8.6h-17.2h-8.6v-3.182l9.9588,-3.3196l2.9412,-0.9804v-3.096v-58.222v-4.3h-4.3h-17.63h-3.1992l-0.9202,3.0659l-2.9498,9.8341h-1.1008v-8.6v-8.6h68.8M124.7,43h-77.4v4.3v8.6v12.9h8.6l3.87,-12.9h17.63v58.222l-12.9,4.3v10.578h12.9h17.2h12.9v-10.578l-12.9,-4.3v-58.222h17.63l3.87,12.9h8.6v-12.9v-8.6v-4.3z"></path></g></g></g></svg>
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>  
  </div>`, 
  });

  bm.add('CTATVideo', {
  label: 'Video',
  category: 'CTAT Components',
  content: CTATVideo,
  render: ({ model, className }) => `<div class="${className}__my-wrap">
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#b9a5a6"><path d="M13.4375,21.5c-4.56875,0 -8.0625,3.73231 -8.0625,8.08875v112.73327c0,4.35644 3.49375,8.08875 8.0625,8.08875h145.125c4.56875,0 8.0625,-3.73231 8.0625,-8.08875v-112.73327c0,-4.35644 -3.49375,-8.08875 -8.0625,-8.08875zM13.4375,26.79102h145.125c1.6125,0 2.6875,1.24167 2.6875,2.79773v112.73327c0,1.55606 -1.075,2.80298 -2.6875,2.80298h-145.125c-1.6125,0 -2.6875,-1.24692 -2.6875,-2.80298v-112.73327c0,-1.55606 1.075,-2.79773 2.6875,-2.79773zM18.8125,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM32.25,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM45.6875,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM59.125,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM72.5625,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM86,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM99.4375,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM112.875,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM126.3125,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM139.75,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.4835 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM153.1875,32.25c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM18.8125,48.375c-1.6125,0 -2.6875,1.075 -2.6875,2.6875c0,1.6125 1.075,2.6875 2.6875,2.6875h18.8125v64.5h-18.8125c-1.6125,0 -2.6875,1.075 -2.6875,2.6875c0,1.6125 1.075,2.6875 2.6875,2.6875h134.375c1.6125,0 2.6875,-1.075 2.6875,-2.6875c0,-1.6125 -1.075,-2.6875 -2.6875,-2.6875h-18.8125v-64.5h18.8125c1.6125,0 2.6875,-1.075 2.6875,-2.6875c0,-1.6125 -1.075,-2.6875 -2.6875,-2.6875zM43,53.75h86v64.5h-86zM72.40503,59.125c-1.42237,0.08362 -2.53234,1.26267 -2.53003,2.6875v48.375c0.00072,0.96743 0.52129,1.85983 1.36304,2.33664c0.84176,0.47682 1.87482,0.46447 2.70495,-0.03232l40.3125,-24.1875c0.80917,-0.48584 1.30422,-1.3605 1.30422,-2.30432c0,-0.94382 -0.49505,-1.81848 -1.30422,-2.30432l-40.3125,-24.1875c-0.38475,-0.23187 -0.82147,-0.36361 -1.27026,-0.38318c-0.08918,-0.00445 -0.17852,-0.00445 -0.2677,0zM75.25,66.55762l32.40222,19.44238l-32.40222,19.44238zM18.8125,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM32.25,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM45.6875,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM59.125,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM72.5625,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM86,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM99.4375,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM112.875,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM126.3125,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM139.75,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875zM153.1875,129c-1.6125,0 -2.6875,1.20131 -2.6875,2.6875v5.375c0,1.48619 1.075,2.6875 2.6875,2.6875c1.6125,0 2.6875,-1.20131 2.6875,-2.6875v-5.375c0,-1.48619 -1.075,-2.6875 -2.6875,-2.6875z"></path></g></g></svg>
  <div class="gjs-block-label">${model.get('label')}</div>
  </div>  
</div>`, 
  });
}
