API_URL ='http://localhost:3000';
function callAPI(endpoint,method,body){
  return axios({
   method: method,
   url:`${API_URL}/${endpoint}`,
   data:body
  }).catch(error=>{
    console.log(">>>> this is err in callAPI:",error);
  });
};

// create post method
function post(){

   // var lenData =(callAPI('Product','get',null).then(res=>{var product =res.data}));
   // var id =lenData;

   var name = document.frm.txt_name.value;
   var avatar = document.frm.txt_img.value;
   var price = document.frm.txt_price.value;
   var quantity= document.frm.txt_quantity.value;
   var OneProduct ={
      name:name,
      avatar: avatar,
      price:price,
      quantity:quantity,
   };
   callAPI("animal",'post',OneProduct).catch(err=>{console.log(err)});
   show();

   // một vấn đề đang gặp phải ở đây là khi chúng ta đẩy dữ liệu lên mock API thì dữ liệu chưa được load lại và cần chúng ta
   // load lại để có thể chạy được chương trình. tức là chạy lại từ đầu
   // == > ảnh hưởng đến việc show các dữ liệu ngay khi chúng ta đẩy dl. 
};

  // chắc chắn rằng khi reload lại từ đầu thì những chương trình sẽ chạy lại luôn từ đâu và cần 
  //  lặp lại hoạt động như lầm thứ nhất theo từng bước một.
function show(){
   callAPI('animal','get',null).then(response=>{
    var Product =response.data;
    var html='<tr>';
   for(let i in Product){
      html+= '<th scope="col">'+Product[i].id+'</th>';
      console.log(Product[i].id)
      html+= '<th scope="col">'+Product[i].name+'</th>';
      html+= '<th scope="col"> <img src="'+Product[i].avatar+'" width="45px" height="45px"></th>';
      html+= '<th scope="col">'+Product[i].price+'</th>';
      html+= '<th scope="col">'+Product[i].quantity+'</th>';
      html+= '<th scope="col">'+Product[i].id_type+'</th>';
      console.log("this is Product.id_type khi chua co any dl nao:",Product[i].id_type);
      html+= '<th scope="col">'+'<td>'+`<button type="button" onclick="update(${Product[i].id})">update</button>`+"</td>"+"<td>"+` 
      <button type="button"  onclick='deletes(${Product[i].id})'>delete</button>`+"</td>"+'</th>';
      html+= '</tr>';
   };
   document.getElementById('table1').innerHTML=html;
   });
};

function deletes(i){
   alert("xóa thành công");
   callAPI(`animal/${i}`,'Delete',null);
   show();
};


// function update(i){
//    callAPI(`Product/${i}`,'get',null).then(res=>{
//    var oneUpdate= res.data;
//    document.getElementById('name').value=oneUpdate.name;
//    document.getElementById('img').value= oneUpdate.avatar;
//    document.getElementById('price').value= oneUpdate.price;
//    document.getElementById('quantity').value= oneUpdate.quantity;
//    var name = document.frm.txt_name.value;
//    var avatar = document.frm.txt_img.value;
//    var price = document.frm.txt_price.value;
//    var quantity= document.frm.txt_quantity.value;

//    var a =document.getElementById('save').innerHTML=`<button type="button" class="btn btn-success" onclick="submit(${oneUpdate})">submit</button>`;
//    document.getElementById('save').style.display="none"
//    console.log(">> a's value is: ",a);
//    var oneUpdate={
//          name:name,
//          avatar:avatar,
//          price:price,
//          quantity:quantity,
//    }  
//    });
// }
// function submit(data){
//    callAPI(`Product/${i}`,'put',data).then(res=>{
//       alert('successfull');
//    });
//    document.getElementById('save').innerHTML=`<input type="button" id="save" value="save" onclick="post()" >`;
//    show();
// }