// calculate the number of stops between stations on the "MBTA". 
//Write additional functions used by this function as needed.
// The function takes the line and stop that a rider is getting on at and the line and stop 
//that a rider is getting off at and returns the total number of stops for the trip.


const lines = {
    Red: [
        'South Station',
        'Park Street',
        'Kendall',
        'Central',
        'Harvard',
        'Porter',
        'Davis',
        'Alewife'
        ],
    
    Green: [
        'Government Center',
        'Park Street',
        'Boylston',
        'Arlington',
        'Copley',
        'Hynes',
        'Kenmore'
    ],
    
    Orange: [
        'North Station',
        'Haymarket',
        'Park Street',
        'State',
        'Downtown Crossing',
        'Chinatown',
        'Back Bay',
        'Forest Hills'
    ]

}

 const stopsBetweenStations = function(startLine,startStation,endLine,endStation){
    let stopsCounter = 0;
    const startIndex = lines[startLine].indexOf(startStation);
    const endIndex = lines[endLine].indexOf(endStation);

     if (Object.keys(lines).indexOf(startLine) === Object.keys(lines).indexOf(endLine)){
        if (endIndex > startIndex){
            stopsCounter = (endIndex - startIndex);
        }
        else {
            stopsCounter = (startIndex - endIndex);
        }
    }

     if (Object.keys(lines).indexOf(startLine) !== Object.keys(lines).indexOf(endLine)){
        const startTransfers = lines[startLine].indexOf("street park");
        const endTransfers = lines[endLine].indexOf("street park");
        let Transfers = 0;
        if (endTransfers > startTransfers){
            Transfers = (endTransfers - startTransfers);
        }
        else {
            Transfers = (startTransfers - endTransfers)
        }
        if (endIndex > startIndex){
            stopsCounter = (endIndex + startIndex - Transfers)
        }
        else {
            stopsCounter = (startIndex + endIndex - Transfers)
        }
    }
    return stopsCounter+" Stops";
};
    
console.log( stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')) // 0 stops
console.log( stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')) // 7 stops
console.log( stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) // 6 stops
