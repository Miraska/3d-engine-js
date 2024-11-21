import RegularPrism from './RegularPrism.js';

/**
 *
 *   5________4
 *  / |      /|
 * 0________1 |
 * |  6_____|_7
 * | /      | /
 * 3________2/
 *
 */
class Cube extends RegularPrism {

    /**
     *
     * @param {number} size
     */
    constructor(size, allTriangles = true) {
        super(size, size, size, allTriangles);
    }
}

export default Cube;