//bootstrap DateTimePicker React element
//bootstrap,DateTimePicker plugin needed to work .
//bootstrap DateTimePicker plugin : https://eonasdan.github.io/bootstrap-datetimepicker/
// </> with ♬♫ by rusith
var DateTimePicker=React.createClass({
  propTypes:{
    "inputId":React.PropTypes.string,
    "inputName":React.PropTypes.string,
    "locale":React.PropTypes.string,
    "noIcon":React.PropTypes.bool,
    "format":React.PropTypes.string,
    "defaultDate":React.PropTypes.string,
    "disabledDates":React.PropTypes.any,
    "icons":React.PropTypes.any,
    "viewMode":React.PropTypes.any,
    "daysOfWeekDisabled":React.PropTypes.any,
    "placeholder":React.PropTypes.string
  },
  _getDTPO:function(){
    return $(this.refs.picker).data("DateTimePicker");
  },
  toggleIcon:function(){
    var st=this.state;
    st.noIcon=(!st.noIcon);
    this.setState(st);
  },
  enableIcon:function(){
    var st=this.state;
    if(st.noIcon){
      st.noIcon=false;
      this.setState(st);
    }
  },
  disableIcon:function(){
    var st=this.state;
    if(!st.noIcon){
      st.noIcon=true;
      this.setState(st);
    }
  },
  inputId:function(newID){
    var st=this.state;
    if(newID){
      st.inputId=newID;
      this.setState(st);
      return;
    }
    return this.st.inputId;
  },
  inputName:function(newName){
    var st=this.state;
    if(newName){
      st.inputName=newName;
      this.setState(st);
      return;
    }
    return this.st.inputName;
  },
  value:function(newValue){
    if(newValue){
      $(this.refs.input).val(newValue);
      return;
    }
    return $(this.refs.input).val();
  },
  destroy:function(){
    this._getDTPO().destroy();
  },
  toggle:function(){
    this._getDTPO().destroy();
  },
  show:function(){
    this._getDTPO().show();
  },
  hide:function(){
    this._getDTPO().hide();
  },
  disable:function(){
    this._getDTPO().disable();
  },
  enable:function(){
    this._getDTPO().enable();
  },
  date:function(newDate){
    var DTP=this._getDTPO();
    if(DTP){
      if(newDate){
        DTP.date(newDate);
        return;
      }
      return DTP.date();
    }

  },
  dateUTC:function(){
    var date=this.date();
    var nDate=date.toDate();
    return moment.utc(nDate);
  },
  dateUTCM:function(){
    return this.dateUTC().valueOf();
  },
  disabledDates:function(newDisabledDates){
    var DTP=this._getDTPO();
    if(DTP){
      if(newDisabledDates){
        DTP.disabledDates(newDisabledDates);
        return;
      }
      return DTP.disabledDates();
    }
  },
  enabledDates:function(newEnabledDates){
    var DTP=this._getDTPO();
    if(DTP){
      if(newEnabledDates){
        DTP.enabledDates(newEnabledDates);
        return;
      }
      return DTP.enabledDates();
    }
  },
  defaultDate:function(newdefaultDate){
    var DTP=this._getDTPO();
    if(DTP){
      if(newdefaultDate){
        DTP.defaultDate(newdefaultDate);
        return;
      }
      return DTP.defaultDate(newdefaultDate);
    }
  },
  useCurrent:function(useCurrent){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.useCurrent(useCurrent);
      return;
    }
    return DTP.useCurrent();
  },
  minDate:function(newMinDate){
    var DTP=this._getDTPO();
    if(DTP){
      if(newMinDate){
        DTP.minDate(newMinDate);
        return;
      }
      return DTP.minDate();
    }
  },
  maxDate:function(newMaxDate){
    var DTP=this._getDTPO();
    if(DTP){
      if(newMaxDate){
        DTP.maxDate(newMaxDate);
        return;
      }
      return DTP.maxDate();
    }
  },
  daysOfWeekDisabled:function(daysOfWeek){
    var DTP=this._getDTPO();
    if(DTP){
      if(daysOfWeek){
        DTP.daysOfWeekDisabled(daysOfWeek);
        return;
      }
      return DTP.daysOfWeekDisabled();
    }
  },
  format:function(format){
    var DTP=this._getDTPO();
    if(DTP){
      if(format){
        DTP.format(format);
        return;
      }
      return DTP.format();
    }
  },
  locale:function(newLocale){
    var DTP=this._getDTPO();
    if(DTP){
      if(newLocale){
        DTP.locale(newLocale);
        return;
      }
      return DTP.locale();
    }
  },
  stepping:function(newStepping){
    var DTP=this._getDTPO();
    if(DTP){
      if(newStepping){
        DTP.stepping(newStepping);
        return;
      }
      return DTP.stepping();
    }
  },
  sideBySide:function(newSideBySide){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.sideBySide(newSideBySide);
      return;
    }
    return DTP.sideBySide();
  },
  collapse:function(collapse){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.collapse(collapse);
      return;
    }
    return DTP.collapse();
  },
  icons:function(newIcons){
    var DTP=this._getDTPO();
    if(DTP){
      if(newIcons){
        DTP.icons(newIcons);
        return;
      }
      return DTP.icons();
    }
  },
  useStrict:function(newUseStrict){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.useStrict(newUseStrict);
      return;
    }
    return DTP.useStrict();
  },
  widgetPositioning:function(newWidgetPositioning){
    var DTP=this._getDTPO();
    if(DTP){
      if(newWidgetPositioning){
        DTP.widgetPositioning(newWidgetPositioning);
        return;
      }
      return DTP.widgetPositioning();
    }
  },
  viewMode:function(newViewModel){
    var DTP=this._getDTPO();
    if(DTP){
      if(newViewModel){
        DTP.viewMode(newViewModel);
        return;
      }
      return DTP.viewMode();
    }
  },
  calendarWeeks:function(newCalWeeks){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.calendarWeeks(newCalWeeks);
      return;
    }
    return DTP.calendarWeeks();
  },
  showClear:function(newShowClear){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.showClear(newCalWeeks);
      return;
    }
    return DTP.showClear();
  },
  showTodayButton:function(STB){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.showTodayButton(STB);
      return;
    }
    return DTP.showTodayButton();
  },
  toolbarplacement:function(TBR){
    var DTP=this._getDTPO();
    if(DTP){
      if(TBR){
        DTP.toolbarplacement(TBR);
        return;
      }
      return DTP.toolbarplacement();
    }
  },
  dayViewHeaderFormat:function(DVHF){
    var DTP=this._getDTPO();
    if(DTP){
      if(DVHF){
        DTP.dayViewHeaderFormat(DVHF);
        return;
      }
      return DTP.dayViewHeaderFormat();
    }
  },
  keyBinds:function(KB){
    var DTP=this._getDTPO();
    if(DTP){
      if(KB){
        DTP.keyBinds(KB);
        return;
      }
      return DTP.keyBinds();
    }
  },
  clear:function(){
    var DTP=this._getDTPO();
    if(DTP){
      DTP.clear();
    }
  },
  inline:function(inline){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.inline(inline);
      return;
    }
    return DTP.inline();
  },
  ignoreReadonly:function(ignoreReadonly){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.ignoreReadonly(ignoreReadonly);
      return;
    }
    return DTP.ignoreReadonly();
  },
  showClose:function(showClose) {
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.showClose(showClose);
      return;
    }
    return DTP.showClose();
  },
  keepInvalid:function(keepInvalid){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.keepInvalid(keepInvalid);
      return;
    }
    return DTP.keepInvalid();
  },
  allowInputToggle:function(allowInputToggle){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.allowInputToggle(allowInputToggle);
      return;
    }
    return DTP.allowInputToggle();
  },
  focusOnShow:function(focusOnShow){
    var DTP=this._getDTPO();
    if(arguments.length>0){
      DTP.focusOnShow(focusOnShow);
      return;
    }
    return DTP.focusOnShow();
  },
  disabledTimeIntervals:function(disabledTimeIntervals){
    var DTP=this._getDTPO();
    if(DTP){
      if(disabledTimeIntervals){
        DTP.disabledTimeIntervals(disabledTimeIntervals);
        return;
      }
      return DTP.disabledTimeIntervals();
    }
  },
  disabledHours:function(disabledHours){
    var DTP=this._getDTPO();
    if(DTP){
      if(disabledHours){
        DTP.disabledHours(disabledHours);
        return;
      }
      return DTP.disabledHours();
    }
  },
  viewDate:function(viewDate){
    var DTP=this._getDTPO();
    if(DTP){
      if(viewDate){
        DTP.viewDate(viewDate);
        return;
      }
      return DTP.viewDate();
    }
  },
  parseInputDate:function(parseInputDate){
    var DTP=this._getDTPO();
    if(DTP){
      if(parseInputDate){
        DTP.parseInputDate(parseInputDate);
        return;
      }
      return DTP.parseInputDate();
    }
  },
  tooltips:function(tooltips){
    var DTP=this._getDTPO();
    if(DTP){
      if(tooltips){
        DTP.tooltips(tooltips);
        return;
      }
      return DTP.tooltips();
    }
  },
  placeholder:function(PH)
  {
    if(!PH)
    {
      return this.state.placeholder;
    }
    else
    {
      var st=this.state;
      st.placeholder=PH;
      this.setState(PH);
    }
  },
  getInitialState:function(){
    var props=this.props;
    var newState=$.extend({},{
      'noIcon':props.noIcon,
      'inputId':props.inputId?props.inputId:undefined,
      'inputName':props.inputName?props.inputName:undefined,
      'placeholder':props.placeholder
    });
    return newState;
  },
  componentDidMount:function(){
    var P=this.props;
    var settings=$.extend({}, {
      "locale": P.locale ? P.locale : undefined,
      "format":P.format ? P.format :undefined,
      "defaultDate":P.defaultDate ? P.defaultDate:undefined,
      "disabledDates":P.disabledDates ? P.disabledDates:undefined,
      "icons":P.icons ? P.icons:undefined,
      "viewMode":P.viewMode?P.viewMode:undefined,
      "daysOfWeekDisabled":P.daysOfWeekDisabled?P.daysOfWeekDisabled:undefined
    });
    $(this.refs.picker).datetimepicker(settings);
  },
  render:function(){
    var st=this.state;
    return(
      <div className='input-group date' ref="picker">
         <input ref="input" placeholder={st.placeholder} type='text' id={st.inputId} name={st.inputName} className="form-control"/>
         {(this.state.noIcon?"":
           <span className="input-group-addon">
              <span className="glyphicon glyphicon-calendar"></span>
          </span>)}
     </div>
    )
  }
});
