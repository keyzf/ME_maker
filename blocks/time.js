'use strict';

Blockly.Blocks['time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取实际时间戳");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['time2day'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("时间戳转时间");
    this.appendValueInput("timeStamp")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("时间戳");
    this.appendValueInput("fmt")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("格式");
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};