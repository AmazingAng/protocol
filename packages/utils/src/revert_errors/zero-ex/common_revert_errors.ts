import { RevertError } from '../../revert_error';

// tslint:disable:max-classes-per-file
export class OnlyCallableBySelfError extends RevertError {
    constructor(sender?: string) {
        super('OnlyCallableBySelfError', 'OnlyCallableBySelfError(address sender)', {
            sender,
        });
    }
}

const types = [OnlyCallableBySelfError];

// Register the types we've defined.
for (const type of types) {
    RevertError.registerType(type);
}
