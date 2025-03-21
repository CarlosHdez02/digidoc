
export default class PackageService{
    public baseurl = 'https://67dc894ae00db03c40685479.mockapi.io/api/v1/package'

    async fetchPackage(){
        try{
            const response = await fetch(this.baseurl);
            const data = await response.json()
            return data;
        }catch(err){
            console.error(err,"err at package service")
        }
    }
}