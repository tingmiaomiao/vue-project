import '../assets/styles/footer.styl'
export default {
    data(){
        return{
            author: 'Ting Miaomiao'
        }
    },
    render(){
        return(
            <div class="footer">
                <span >Written By {this.author}</span>
            </div>
        )
    }
}