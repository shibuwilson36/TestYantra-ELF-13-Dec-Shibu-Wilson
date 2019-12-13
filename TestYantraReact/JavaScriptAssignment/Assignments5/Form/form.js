let form=`
<form action="">
            <div class="form-group">
                <h1>Login</h1>
                <label for="">Name</label>
                <input class="form-control" type="text" name="" id="">
                <label for="">Age</label>
                <input class="form-control" type="text" name="" id="">
                <label for="">Address</label>
                <input class="form-control" type="text" name="" id="">
                <label for="">AddrDate of Birth</label>
                <input class="form-control" type="date" name="" id="">
                <div class=" float-right mt-3">
                    <button type="submit" class="btn btn-outline-primary"> button</button>
                   
                </div>
            </div>
        </form>`
let dElement=document.getElementById("div1");
dElement.innerHTML=form