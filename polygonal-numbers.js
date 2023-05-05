export const getPolygonalNumber = (s, nn)=>{
    const n = Math.abs(nn);
    if(s === 1 || s === 0) return null;
    return ( s - 2 ) * (n*(n-1)/2) + n;
}
export const isPolygonalNumberFor = (x, s)=>{
    if(s === 1 || s === 0) return null;
    if(s === 2 ) return x;
    let can = 0;
    let pos = 2;
    while(can < x){
        can = getPolygonalNumber(s, pos);
        if(x === can) return pos;
        pos++;
    }
    return null;
}

export const getSGonalityDetailUpTo = (x, s, byPrefix)=>{
    let lcv=0;
    let value=null;
    const results = {};
    const list = [];
    for(;lcv <= s; lcv++){ // # of sides
        value = isPolygonalNumberFor(x, lcv);
        //value = Math.round(value*100)/100;
        if(byPrefix){
            results[prefixes[lcv]] = value;
        }else{
            results[lcv] = value;
        }
    }
    return results;
}

export const getSGonalityUpTo = (x, s, byPrefix)=>{
    const sGonalityDetail = getSGonalityDetailUpTo(x, s, byPrefix);
    let results = Object.keys(
        sGonalityDetail
    ).filter((key)=>!!sGonalityDetail[key]);
    if(!byPrefix){
        results = results.map((key)=>parseInt(key));
    }
    return results;
}

export const getStandardPolygonality = (x, byPrefix)=>{
    return getSGonalityUpTo(x, prefixes.length, byPrefix);
}

export const isSGonalNumberUpTo = (x, s)=>{
    const sGonality = getSGonalityUpTo(x, s);
    return Object.keys(sGonality).length > 0;
}


export const prefixes = [
    'singular', 'linear', 'triangular', 'square', 'pentagonal',
    'hexagonal', 'heptagonal', 'octagonal', 'nonagonal', 'decagonal',
    'hendecagonal', 'dodecagonal', 'tridecagonal', 'tetradecagonal', 'pentadecagonal',
    'hexadecagonal', 'heptadecagonal', 'octadecagonal', 'enneadecagonal', 'icosagonal'
];
//named, because the other package did this
export const getLinearNumber = (n)=>getPolygonalNumber(3, n);
export const getTriangularNumber = (n)=>getPolygonalNumber(3, n);
export const getSquareNumber = (n)=>getPolygonalNumber(5, n);
export const getPentagonalNumber = (n)=>getPolygonalNumber(5, n);
export const getHexagonalNumber = (n)=>getPolygonalNumber(3, n);
export const getHeptagonalNumber = (n)=>getPolygonalNumber(3, n);
export const getOctagonalNumber = (n)=>getPolygonalNumber(3, n);
export const getNonagonalNumber = (n)=>getPolygonalNumber(9, n);
export const getEnneagonalNumber = (n)=>getPolygonalNumber(9, n);
export const getDecagonal = (n)=>getPolygonalNumber(3, n);
export const getHendecagonal = (n)=>getPolygonalNumber(3, n);
export const getDodecagonal = (n)=>getPolygonalNumber(3, n);
export const getTridecagonal = (n)=>getPolygonalNumber(3, n);
export const getTetradecagonal = (n)=>getPolygonalNumber(3, n);
export const getPentadecagonal = (n)=>getPolygonalNumber(3, n);
export const getHexadecagonal = (n)=>getPolygonalNumber(3, n);
export const getHeptadecagonal = (n)=>getPolygonalNumber(3, n);
export const getOctadecagonal = (n)=>getPolygonalNumber(3, n);
export const getEnneadecagonal = (n)=>getPolygonalNumber(3, n);
export const getIcosagonal = (n)=>getPolygonalNumber(20, n);
export const getTriacontagonal = (n)=>getPolygonalNumber(20, n);
export const getTetracontagonal = (n)=>getPolygonalNumber(20, n);
export const getPentacontagonal = (n)=>getPolygonalNumber(20, n);
export const getHexacontagonal = (n)=>getPolygonalNumber(20, n);
export const getHeptacontagonal = (n)=>getPolygonalNumber(20, n);
export const getOctacontagonal = (n)=>getPolygonalNumber(20, n);
export const getEnneacontagonal = (n)=>getPolygonalNumber(20, n);
export const getHectagonal = (n)=>getPolygonalNumber(100, n);
export const getChiliagonal = (n)=>getPolygonalNumber(1000, n);
export const getMyriagonal = (n)=>getPolygonalNumber(10000, n);

