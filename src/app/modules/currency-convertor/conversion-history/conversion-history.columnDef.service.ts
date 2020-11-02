
export class ConversionHistoryColumnDefinitionService {

    public getColumnDefinition(): any {
        return [
            { 
                headerName: 'FROM',
                field: 'from', 
                sortable: true, 
                filter: true
            },
            { 
                headerName: 'TO',
                field: 'to', 
                sortable: true, 
                filter: true 
            },
            { 
                headerName: 'Date',
                field: 'date', 
                sortable: true, 
                filter: true 
            },
            { 
                headerName: 'Time',
                field: 'time', 
                sortable: true, 
                filter: true 
            }
        ]
    }
    
}