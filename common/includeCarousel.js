var carouselId = document.currentScript.getAttribute("carouselId");
var mediaPath = (document.currentScript.getAttribute("isMainIdx") === "1") ? "./media/" : "../media/";
var descriptionArr = document.currentScript.getAttribute("descriptionArr").split("||");
var picFileArr = document.currentScript.getAttribute("picFileArr").split(", ");
var picFileArrLen = picFileArr.length;
var picWidthArr = document.currentScript.getAttribute("picWidthArr").split(", ");

document.write("<div id=\"" + carouselId + "\" class=\"carousel slide\" data-ride=\"carousel\">");
document.write("	<!-- Indicators -->");
document.write("	<ol class=\"carousel-indicators\">");
for(picIdx = 0; picIdx < picFileArrLen; picIdx++)
{
	document.write("		<li data-target=\"" + carouselId + "\" data-slide-to=\"" + picIdx + "\"" + (picIdx === 0 ? "class=\"active\"" : "") + "><\/li>");
}
document.write("	<\/ol>");
document.write("");

document.write("	<!-- Wrapper for slides -->");
document.write("	<div class=\"carousel-inner\" role=\"listbox\">");
for(picIdx = 0; picIdx < picFileArrLen; picIdx++)
{
	var fileSuffix = picFileArr[picIdx].split(".")[1];
	document.write("		<div class=\"item " + (picIdx === 0 ? "active" : " ") + "\">");
	if(fileSuffix === "mp4")
	{
		document.write("			<video width=\"" + picWidthArr[picIdx] + "\" autoplay muted style=\"width:auto; margin-left:auto; margin-right:auto; display:block\">");
		document.write("				<source src=\"" + mediaPath + picFileArr[picIdx] + "\" type=\"video\/mp4\">");
		document.write("			<\/video>");
		document.write("			<script>");
		document.write("				$('video').on('play', function (e) {");
		document.write("					$(\"#" + carouselId + "\").carousel('pause');");
		document.write("				});");
		document.write("				$('video').on('stop pause ended', function (e) {");
		document.write("					$(\"#" + carouselId + "\").carousel();");
		document.write("				});");
		document.write("			<\/script>");

	}
	else /* jpg, mpeg, etc. */
	{
		document.write("			<img src=\"" + mediaPath + picFileArr[picIdx] + "\" alt=\"\" style=\"width:" + picWidthArr[picIdx] + "px; height:auto; max-width: 100%;\">");
	}
	document.write("			<div class=\"carousel-caption\">");
	document.write("				<p><kbd>" + descriptionArr[picIdx] + "<\/kbd><\/p>");
	document.write("			<\/div>");
	document.write("		<\/div>");
	document.write("");
}
document.write("	<\/div>");
document.write("");

document.write("	<!-- Left and right controls -->");
document.write("	<a class=\"left carousel-control\" href=\"#" + carouselId + "\" role=\"button\" data-slide=\"prev\">");
document.write("		<span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"><\/span>");
document.write("		<span class=\"sr-only\">Previous<\/span>");
document.write("	<\/a>");
document.write("	<a class=\"right carousel-control\" href=\"#" + carouselId + "\" role=\"button\" data-slide=\"next\">");
document.write("		<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"><\/span>");
document.write("		<span class=\"sr-only\">Next<\/span>");
document.write("	<\/a>");
document.write("<\/div>");

