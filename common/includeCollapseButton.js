var buttonId = document.currentScript.getAttribute("buttonId");

document.write("<a href=\"#" + buttonId + "\" class=\"btn btn-primary\" data-toggle=\"collapse\" aria-expanded=\"false\" aria-controls=\"" + buttonId + "\">");
document.write("	<span class=\"collapsed\">");
document.write("		Show more");
document.write("	<\/span>");
document.write("	<span class=\"expanded\">");
document.write("		Show Less");
document.write("	<\/span>");
document.write("<\/a>");
