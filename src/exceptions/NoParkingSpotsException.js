/**
 * Created by Glenn De Block on 20/10/2015.
 */

function NoParkingSpotsException(message){
    this.name = "NoParkingSpotsException";
    this.message = message;
    this.stack = (new Error()).stack;
}

NoParkingSpotsException.prototype = Object.create(Error.prototype);
NoParkingSpotsException.prototype.constructor=NoParkingSpotsException;