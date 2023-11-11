var attrState="data-pjax-state";module.exports=function(t){switch(t.tagName.toLowerCase()){case"a":
// only attach link if el does not already have link attached
t.hasAttribute(attrState)||this.attachLink(t);break;case"form":
// only attach link if el does not already have link attached
t.hasAttribute(attrState)||this.attachForm(t);break;default:throw"Pjax can only be applied on <a> or <form> submit"}};