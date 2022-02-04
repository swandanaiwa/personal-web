let blogs = []
function addBlog(event) {
    
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let startDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let content = document.getElementById('input-blog-content').value
    let technologyNodeJs = document.getElementById('node-js').value
    let technologyReactJs = document.getElementById('react-js').value
    let technologyNextJs = document.getElementById('next-js').value
    let technologyTypescript = document.getElementById('typescript').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0])

    let blog = {
        author: 'Rhoma Irama',
        title,
        startDate,
        endDate,
        content,
        technologyNodeJs,
        technologyReactJs,
        technologyNextJs,
        technologyTypescript,
        image,
        // postedAt: new Date()
    }

    console.table(blog)

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let i = 0

    // Menggunakan length agar penampilan data perulangan dinamis
    let lengthData = blogs.length

    // Membuat variable baru untuk mengambil element dari contents
    let blogContainer = document.getElementById('contents')
    
    // Assigned nilai yang sudah di return kedalam var (blogContainer)
    blogContainer.innerHTML = firstBlogContent()

    // *LOGIC PENAMBAHAN BLOGS*
    
    //  dasarnya content awal/default dalam bentuk array adalah [content-default]

    //  lalu ketika menggunakan innerHTML += content-1 
    //  maka array akan berubah menjadi [content-default, content-1] dimana
    //  array tersebut akan kembali menjadi content-default sebagai berikut:

    //  >> content default [content-default, content-1] <<

    //  lalu ketika kita ingin menambahkan content baru (content-2) maka tampilan selanjutnya
    //  yang akan keluar adalah sebagai berikut 

    //  >> [content-default, content-1, content-2] <<
    //  jadi terdapat duplikasi content seperti ini
    //  >> [content-default, content-1, [content-default, content-1, content-2]] <<
    //  *[] adalah content-default baru yang bersamaan dengan content-2*

    //  oleh sebab itu kita harus me-return nilai content-default yang SEBELUMNYA terlebih dahulu 
    //  menggunakan function firstBlogContent() agar hasil tidak ter-duplikasi atau 
    //  membawa kembali content-default

    // *LOGIC PENAMBAHAN BLOGS*

    // apakah logic (benar/salah) ? hari senin tanyain ke mas ilham*

    // Looping / Perulangan
    for (i; i < lengthData; i++) {

        // Penambahan blog list baru dengan looping
        blogContainer.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[i].image}" alt="" style="width: 330px; height: 300px;">
            </div>
            <div class="blog-title">
            <h3>
                <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a>
            </h3>
            </div>
            <div class="blog-duration">
                <h5>${blogs[i].startDate} - ${blogs[i].endDate}</h5>
            </div>
            <div class="blog-content">
                <p>
                ${blogs[i].content}
                </p>
            </div>
            <div class="blog-tech">
                <a href="">${blogs[i].technologyNodeJs} ${blogs[i].technologyReactJs} ${blogs[i].technologyNextJs} ${blogs[i].technologyTypescript}</a>
            </div>
            <div class="blog-manage">
                <div class="blog-edit">
                    <p>edit</p>
                </div>
                <div class="blog-delete">
                    <p>delete</p>
                </div>
            </div>
        </div>
        `
    }
}

function firstBlogContent() {
    // Mengembalikan tampilan awal blogs
    return `
    <div class="blog-list-item">
        <div class="blog-image">
        <img src="assets/blog3.jpg" alt="">
        </div>
        <div class="blog-title">
        <h3>
            <a href="blog-detail.html" target="_blank"
            >Dumbways Mobile Apps - 2021</a>
        </h3>
        </div>
        <div class="blog-duration">
        <h5>durasi : 2 bulan</h5>
        </div>
        <div class="blog-content">
        <p>
            App that used for Dumbways student, it was deployed and can downloaded on
            Playstore. Happy Download
        </p>
        </div>
        <div class="blog-tech">
        <img src="assets/nodejs.png" alt="" width="25" height="25">
        <img src="assets/reactjs.png" alt="" width="25" height="25">
        <img src="assets/typescript.png" alt="" width="25" height="25">
        </div>
        <div class="blog-manage">
        <div class="blog-edit">
            <p>edit</p>
        </div>
        <div class="blog-delete">
            <p>delete</p>
        </div>
        </div>
    </div>
    `
}
