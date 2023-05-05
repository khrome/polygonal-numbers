import * as chai from 'chai';
const should = (chai.should?chai:window.chai).should();
import { getStandardPolygonality } from '../polygonal-numbers.js';

describe('polygonal-numbers', ()=>{
    it('getStandardPolygonality() works by index', ()=>{
        const polygonality = getStandardPolygonality(15);
        polygonality.should.deep.equal([ 2, 3, 6, 15 ]);
    });
    
    it('getStandardPolygonality() works by name', ()=>{
        const polygonality = getStandardPolygonality(15, true);
        polygonality.should.deep.equal([
            'triangular', 
            'square', 
            'heptagonal', 
            'hexadecagonal'
        ]);
    });
});
