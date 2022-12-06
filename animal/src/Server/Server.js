class Server {
    BASE_URL = 'http://localhost:8080/api/animal';
    header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };


    async getAll(){
        await fetch(this.BASE_URL, {
            headers:this.header, 
            mode: 'no-cors', 
            method:'GET'})
    }

   
    async getById(id){
        return await fetch (`${this.BASE_URL}/${id}`,{
            method:'GET',
            ...this.headers
        });
    }

    async delete(id){
        return await fetch(`${this.BASE_URL}/${id}`,{
            method: 'DELETE'
        });
    }

    async update(item){
        return await fetch(`${this.BASE_URL}/${item.id}`,{
            method: 'PUT',
            body: JSON.stringify(item)
        });
    }

    async create(item){
        return await fetch(this.BASE_URL,{
            method: 'POST',
            body: JSON.stringify(item)
        })
    }
}

export default Server;