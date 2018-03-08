export class Ranking{

    constructor(  public isCheia: boolean,
                  public bolaCheia:string = 'bola-cheia',
                  public bolaVazia:string = 'bola-vazia',
                 ){

    }

    public exibeBola():string{
        if(this.isCheia){
            return this.bolaCheia
        } else{
            return this.bolaVazia
        }
    }

    public mudaCor():boolean{
        return this.isCheia = true ;
        
    }

}