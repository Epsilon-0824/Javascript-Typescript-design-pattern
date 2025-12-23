type Shape = {type: 'circle'; radius: number} | {type: 'square'; side: number} | {type: 'triangle', height: number}

function getArea(shape: Shape): number{
        switch(shape.type){
            case 'circle':
                return 100
            case 'square':
                return 200
            case 'triangle':
                return 300
            default:
                const err: never = shape;
                throw new Error(`unexpected shape: ${err}`);
        }
}