
Date.prototype.toLocalDateISOString = function() {
    return `${getYear(this)}-${getMonth(this)}-${getDay(this)}T00:00:00`;
};

function getYear(localDate: Date): string {
    return localDate.getFullYear().toString().padStart(4, '0');
}

function getMonth(localDate: Date): string {
    return (localDate.getMonth() + 1).toString().padStart(2, '0');
}

function getDay(localDate: Date): string {
    return localDate.getDate().toString().padStart(2, '0');
}
