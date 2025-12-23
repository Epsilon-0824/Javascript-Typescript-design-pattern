class Animal{
    private name: string;

    public constructor(name: string){
        this.name = name;
    }

    protected move(distantInMeter: number){
        console.log(`${this.name} moved ${distantInMeter}m.`);
    }
}