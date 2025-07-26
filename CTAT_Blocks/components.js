export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const ENABLE = {
    type: 'checkbox', // Type of the trait
    label: 'Enabled', // The label you will see in Settings
    name: 'data-ctat-enabled', // The name of the attribute/property to use on component
    changeProp: true,
    _default: true
  },
  TUTOR = {
    type: 'checkbox', // Type of the trait
    label: 'Tutored', // The label you will see in Settings
    name: 'data-ctat-tutor', // The name of the attribute/property to use on component
    changeProp: true,
    _default: true
  },
  SHOW_FEEDBACK = {
    type: 'checkbox', // Type of the trait
    label: 'Show Feedback', // The label you will see in Settings
    name: 'data-ctat-show-feedback', // The name of the attribute/property to use on component
    changeProp: true,
    _default: true
  },
  DISABLE_ON_CORRECT = {
    type: 'checkbox', // Type of the trait
    label: 'Disable on Correct', // The label you will see in Settings
    name: 'data-ctat-disable-on-correct', // The name of the attribute/property to use on component
    changeProp: true,
    _default: true
  },
  SHOW_HINT_HIGHLIGHT = {
    type: 'checkbox', // Type of the trait
    label: 'Show Hint Highlight', // The label you will see in Settings
    name: 'data-ctat-show-hint-highlight', // The name of the attribute/property to use on component
    changeProp: true,
    _default: true
  };
  
  const CTATTraits = [
    ENABLE,
    TUTOR,
    SHOW_FEEDBACK, 
    DISABLE_ON_CORRECT,
    SHOW_HINT_HIGHLIGHT
  ];

  //setters to call on CTATComponent instances to reflect attr changes in the canvas
  const CTATAttrSetters = {
	'data-ctat-enabled': 'setEnabled',
	'data-ctat-label': 'setText',
	'data-ctat-labels': 'setLabels',
	'data-ctat-value': 'SetPieces',
	'data-ctat-maximum': 'set_maximum',
	'data-ctat-minimum': 'set_minimum',
	'data-ctat-large-tick-step': 'set_large_step',
	'data-ctat-small-tick-step': 'set_small_step',
	'data-ctat-denominator': 'set_denominator',
	'data-ctat-rotation': 'setOrientation',
	'value': {
		'CTATNumericStepper': 'Update',
		'CTATTextInput': 'UpdateTextField',
	},
	'max': 'set_maximum',
	'min': 'set_minimum',
	'data-ctat-num-rows': 'setNumRows',
	'data-ctat-num-cols': 'setNumCols'
  }
  
  //defines a component config object for adding CTAT types to the editor
  function CTATComponentDef(CTATClassname, traits) {
      this.model = {
          defaults: {traits:[]} 
      };
      traits.forEach((t)=>{
          this.model.defaults.traits.push(t);
          if (t.changeProp) {
        	  this.model.defaults[t.name] = t._default
          }
      });
      this.isComponent = function(classname, el) {
        return el.classList && el.classList.contains(classname);
      }.bind(this,CTATClassname);
      this.model.init = function() {
          this.getTraits().forEach((t)=>{
            let ta = t.attributes;
            if (ta.changeProp) {
              this.on("change:"+ta.name,this.handlePropChange.bind(this, ta.name));  
			} else {
			  this.on("change:attributes:"+ta.name, this.handleAttrChange.bind(this, ta.name));
			}
          });
      };
      this.model.handlePropChange = function(p) {
	    if (p.includes('data-ctat')) {
          const attr = {};
          attr[p] = this.get(p).toString();
          this.addAttributes(attr);
          this.handleAttrChange(p);
		}
      };
	  this.model.handleAttrChange = function(a) {
		  const el = this.getEl(),
				win = el.ownerDocument.defaultView,
				ctatComp = win.$(el).data().CTATComponent;
				
		  let val = this.attributes.attributes[a];
		  let setter;
		  if(setter = CTATAttrSetters[a]) {
			val = (val === "false" ? false : val);
			if (typeof setter === "object") {
				setter[this.attributes.type] && ctatComp[setter[this.attributes.type]](val);
			} else {
				ctatComp[setter](val);
			}
		  }
	  };
  }
  
  domc.addType('MY-COMPONENT', {
    model: {
      defaults: {
        // Default props
      },
    },
    view: {

    },
  });


  domc.addType('Flexrow', {
    isComponent: el => {return el.classList && el.classList.contains("flexrow")},
    model: {
      defaults: {
        styles: `
            .flexrow {display: flex; flex-direction: row; min-height:50px;}
        `
      },
    },
    view: {

    },
  });

  domc.addType('Flexcolumn', {
    isComponent: el => {return el.classList && el.classList.contains("flexcolumn")},
    model: {
      defaults: {
        styles: `
            .flexcolumn {display: flex; flex-direction: column;}
        `
      },
    },
    view: {

    },
  });

  domc.addType('Flexbox', {
    isComponent: el => {return el.classList && el.classList.contains("flexbox")},
    model: {
      defaults: {
        styles: `
            .flexbox {display: flex;}
        `
      },
    },
    view: {

    },
  });

  domc.addType('Plainbox', {
    isComponent: el => { return el.classList && el.classList.contains( "plainbox")},
    model: {
      defaults: {
        // Default props
      },
    },
    view: {

    },
  });

  domc.removeType('wrapper');

  domc.addType('wrapper', {
    isComponent: el => el.tagName == "body",
    model: {
      defaults: {
        traits: [
          'scripts',
          'styles'
        ]
      },
    },
    view: {

    },
  });

  domc.addType('CTATAudioButton', new CTATComponentDef('CTATAudioButton', [
    'id',
    {
      type: 'text',
      name: 'data-ctat-label',
      label: "Label",
      placeholder: "button1"
    },
    {
      type: 'text',
      label: 'Audio URL',
      name: 'data-ctat-src',
      placeholder: 'Assets/birdsong.mp3',
    },
    {
      type: 'text',
      name: 'value',
      placeholder: '-1',
    },
  ].concat(CTATTraits)));

  domc.addType('CTATButton', new CTATComponentDef('CTATButton', [
    // Strings are automatically converted to text types
    'id',
    {
      type: 'text',
      name: 'data-ctat-label',
      label: "Label",
      placeholder: "button1"
    },
    {
      type: 'text',
      label: 'Image URL',
      name: 'data-ctat-img',
      placeholder: 'Assets/image.png',
    },
    {
      type: 'text',
      name: 'value',
      placeholder: '-1',
    },          
  ].concat(CTATTraits)));
  //FIXME: first param to addtype is type (ctat classname)
  domc.addType('CTATCheckBox', new CTATComponentDef('CTATCheckBox', [
    'id',
    'name',
    {
      type: 'text',
      name: 'data-ctat-label',
      label: "Label",
      placeholder: "checkbox1"
    }       
  ].concat(CTATTraits)));

  domc.addType('CTATComboBox', new CTATComponentDef('CTATComboBox', [
    'id',
    {
      type: 'text',
      name: 'data-ctat-labels',
      label: "Options"
    }
  ].concat(CTATTraits)));  

  domc.addType('CTATDoneButton', new CTATComponentDef('CTATDoneButton', [ENABLE, SHOW_HINT_HIGHLIGHT]));
  
  domc.addType('CTATDragNDrop', new CTATComponentDef('CTATDragNDrop', [
    'id',
    'name',
    {
      type: 'text',
      name: 'data-ctat-max-cardinality',
      label:'Max # of Items',
      placeholder: 'infinity',
    },
  ].concat(CTATTraits)));

  domc.addType('CTATFractionBar', new CTATComponentDef('CTATFractionBar', [
    'id',
    {
      type: 'text',
      name: 'data-ctat-value',
      label:'Value',
      placeholder: '1/2+1/4+(0*1/8)',
    },
    {
      type: 'text',
      name: 'data-ctat-ctrl-denominator',
      label: "Denominator",
      placeholder: '',
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-numerator',
      label: "Numerator",
      placeholder: '',
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-partition',
      label: "Partition",
      placeholder: '',
    }, 
  ].concat(CTATTraits)));  

  domc.addType('CTATGroupingComponent', new CTATComponentDef('CTATGroupingComponent', [
    'id',
    {
      type: 'text',
      name: 'data-ctat-componentlist',
      label:'Component List',
      placeholder: 'CTAT component ids',
    },
  ]));

  domc.addType('CTATHintButton', new CTATComponentDef('CTATHintButton',['id',ENABLE]));

  domc.addType('CTATHintWindow', new CTATComponentDef('CTATHintWindow', ['id']));

  domc.addType('CTATImageButton', new CTATComponentDef('CTATImageButton', [
    'id',
    {
      type: 'text',
      label: 'Image URL',
      name: 'data-ctat-image-default',
      placeholder: 'Assets/image.png',
    },
    {
      type: 'text',
      name: 'value',
      placeholder: '-1',
    },
    'data-ctat-image-default',
    'data-ctat-image-clicked',
    'data-ctat-image-hover',
    'data-ctat-image-disabled',
  ].concat(CTATTraits)));

  domc.addType('CTATJumble', new CTATComponentDef('CTATJumble', ['id'].concat(CTATTraits)));

  domc.addType('CTATNumberLine', new CTATComponentDef('CTATNumberLine', [
    'id',
    {
      type: 'text',
      name: 'data-ctat-maximum',
      label: "Max Value",
      placeholder: '3',
    },  
    {
      type: 'text',
      name: 'data-ctat-minimum',
      label: "Min Value",
      placeholder: '0',
    },    
    {
      type: 'text',
      name: 'data-ctat-large-tick-step',
      label: "Large Increment",
      placeholder: '1',
    },  
    {
      type: 'text',
      name: 'data-ctat-small-tick-step',
      label: "Small Increment",
      placeholder: '1/2',
    }, 
    {
      type: 'text',
      name: 'data-ctat-denominator',
      label: "Denominator",
      placeholder: '0',
    }, 
    {
      type: 'text',
      name: 'data-ctat-max-points',
      label: "Number of Points",
      placeholder: '1',
    }, 
    {
      type: 'text',
      name: 'data-ctat-point-size',
      label: "Point Size",
      placeholder: '7',
    }, 
    {
      type: 'checkbox', // Type of the trait
      label: 'Snap to Tick Marks', // The label you will see in Settings
      name: 'data-ctat-snap', // The name of the attribute/property to use on component
    },
    {
      type: 'text',
      name: 'data-ctat-rotation',
      label: "Angle",
      placeholder: '0',
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-max',
      label: "Max Val Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-min',
      label: "Min Val Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-large-tick',
      label: "Large Tick Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-small-tick',
      label: "Small Tick Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-denominator',
      label: "Denominator Ctrls",
    }, 
  ].concat(CTATTraits)));

  domc.addType('CTATNumericStepper', new CTATComponentDef('CTATNumericStepper', [
    'id',
    {
      type: 'text',
      name: 'value',
      label: "Init Value",
    }, 
    {
      type: 'text',
      name: 'max',
      label: "Max Value",
    }, 
    {
      type: 'text',
      name: 'min',
      label: "Min Value",
    }, 
    {
      type: 'text',
      name: 'step',
      label: "Step Value",
    }, 
  ].concat(CTATTraits)));

  domc.addType('CTATPieChart', new CTATComponentDef('CTATPieChart', [
    'id',
    {
      type: 'text',
      name: 'data-ctat-value',
      label:'Value',
      placeholder: '1/2+1/4+(0*1/8)',
    },
    {
      type: 'text',
      name: 'data-ctat-ctrl-denominator',
      label: "Denominator Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-numerator',
      label: "Numerator Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-ctrl-partition',
      label: "Partition Ctrls",
    }, 
    {
      type: 'text',
      name: 'data-ctat-explode',
      label: "Separate Distance",
      placeholder: "3"
    }, 
    {
      type: 'text',
      name: 'data-ctat-shadow-distance',
      label: "Shadow Length",
      placeholder: "3"
    }, 
  ].concat(CTATTraits)));

  domc.addType('CTATRadioButton', new CTATComponentDef('CTATRadioButton', [
    'id',
    'name',
    {
      type: 'text',
      name: 'data-ctat-label',
      label: "Label",
      placeholder: "button1"
    }       
  ].concat(CTATTraits)));  

  domc.addType('CTATSkillWindow', new CTATComponentDef('CTATSkillWindow', [
    'id'
    ,{
      type:"text",
      name:'data-ctat-threshold',
      label:'Mastery Threshold'
    }
  ]));

  domc.addType('CTATSubmitButton', new CTATComponentDef('CTATSubmitButton', [
    'id',
    {
      type:'text',
      name:'data-ctat-target',
      label:'Target ID'
    },
    {
      type: 'text',
      name: 'data-ctat-label',
      label: "Label",
      placeholder: "Submit"
    },
    {
 
      label:'Value'
    },
  ].concat(CTATTraits)));

  domc.addType('CTATTable', new CTATComponentDef('CTATTable', [
    'id',
    {
      type:'number',
      name:'data-ctat-num-rows',
      label:'Rows',
      placeholder: "2",
      min: 1,
      step: 1
    },
    {
      type: 'number',
      name: 'data-ctat-num-cols',
      label: "Columns",
      placeholder: "2",
      min: 1,
      step: 1,
    },
  ]));

  domc.addType('CTATTextArea', new CTATComponentDef('CTATTextArea', ['id'].concat(CTATTraits)));

  domc.addType('CTATTextInput', new CTATComponentDef('CTATTextInput', ['id'].concat(CTATTraits)));
  
  domc.addType('CTATTextField', new CTATComponentDef('CTATTextField', ['id'].concat(CTATTraits)));
  
  domc.addType('CTATVideo', new CTATComponentDef('CTATVideo', [
    // Strings are automatically converted to text types
    'id',
    {
      type:'text',
      name:'src',
      label:'Video Link'
    },
    TUTOR,
    {
      type: 'checkbox', // Type of the trait
      label: 'Autoplay', // The label you will see in Settings
      name: 'data-ctat-autoplay', // The name of the attribute/property to use on component
    }, 
    {
      type: 'checkbox', // Type of the trait
      label: 'Show Controls', // The label you will see in Settings
      name: 'data-ctat-controls', // The name of the attribute/property to use on component
    },
  ]));
};


