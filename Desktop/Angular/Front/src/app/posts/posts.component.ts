import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  status = true;
  posts : any;
  post = {
    id:0,
    title:'',
    body:'',
    userId:''
  }
  constructor(private postsService : PostsService) {
   
   }

   getPosts(){
    this.postsService.getAll()
    .subscribe(Response =>{
       this.posts = Response ;       
    },error=>{
      alert('erreur inattendue');
      console.log(error);
    })
   }
  ngOnInit(): void {
    this.getPosts();
  }
  
  createPost()
  {
   this.postsService.create(this.post)
    .subscribe(Response => {
      this.post.id =Response['id'];
      this.posts.unshift(this.post);
      this.post =  {
        id:0,
        title:'',
        body:'',
        userId:''
      };
    },error=>{
      alert('erreur inattendue');
      console.log(error);
    })
  }

  editPost(post)
  {
    this.post  =post;
    this.status =false;
  }

  updateePost()
  {
    this.postsService.update(this.post)
    .subscribe(Response => {
      this.post = {
        id:0,
        title:'',
        body:'',
        userId:''
      };
      this.status= true;
    },error=>{
      alert('erreur inattendue');
      console.log(error);
    })
  }
  deletePost(post)
  {
    this.postsService.delete(post)
    .subscribe(Response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error :Response)=>{
      if(error.status === 404)
      {
        alert('ce post déjà supprimé');        
      }else
      {
        alert('erreur inattendue');
      console.log(error);
      }  
    })
  }
}
