type Lang = 'en' | 'th';
type FieldKey = `title_${Lang}`;

type Label = {
    [K in Lang as `title_${K}`]: string;
}

const l: Label