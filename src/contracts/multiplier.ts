import {
    SmartContract,
    assert,
    method,
    prop,
} from 'scrypt-ts'

export class Multiplier extends SmartContract {
    @prop()
    factor1: bigint
    @prop()
    factor2: bigint

    constructor(n1: bigint , n2: bigint) {
        super(...arguments)
        this.factor1 = n1
        this.factor2 = n2
    }

    @method()
    public unlock(multiplier: bigint) {
        assert(multiplier == this.factor1 * this.factor2  , 'incorrect square-root')
    }
}