
$(document).ready(function () {    
    console.log('entro2');

 

    var url = "module/stock_order/controller/controller_order.php?op=datatable";  
    console.log('entro');
    // prepare the data
    var source =
    {
        dataType: "json",
        dataFields: [
            { name: 'cod_producto', type: 'string' },
            { name: 'nombre_disco', type: 'string' },
            { name: 'cod_compra', type: 'string' },
           
        ],
        id: 'id',
        url: url
    };
    
    var dataAdapter = new $.jqx.dataAdapter(source);
    $(".datatable").jqxDataTable(
    {
        width: getWidth("datatable"),
        pageable: true,
        pagerButtonsCount: 10,
        source: dataAdapter,
        sortable: true,
        pageable: true,
        altRows: true,
        filterable: true,
        columnsResize: true,
        pagerMode: 'advanced',
        columns: [
          { text: 'Codigo del producto:', dataField: 'cod_producto'},
          { text: 'Nombre del disco:', dataField: 'nombre_disco' },
          { text: 'Codigo compra:', dataField: 'cod_compra'},
        
      ]
     });  
});