function linkBuilder() {
    let barcodeList = document.getElementById("barcodes").value.replaceAll("\n\n", "\n").replaceAll("\n", "+OR+")
    let link = "https://app.sortly.com/items?direction=ascending&filter=all&isSummaryView=true&keyword=".concat(barcodeList)
    document.getElementById("sortly").innerHTML = "<a href='"+link+"' target='_blank' rel='noopener noreferrer'>Перейти в Sortly</a>"
}
