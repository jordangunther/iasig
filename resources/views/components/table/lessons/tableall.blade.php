<div class="card">
    <div class="card-header bg-white">
        <h3>Manage Files</h3>
    </div>
    <div class="card-body">
        @include('errors.error')
        @include('errors.success')
        <div class="top_search_box d-none d-md-flex">
            <form id="commentForm" method="get" action="/manage/lessons/search" class="header_input_search" enctype="multipart/form-data">
                <input type="text" placeholder="Search Files" name="search">
                <button type="submit">
                    <span class="font-icon-search"></span>
                </button>
                <div class="overlay"></div>
            </form>
        </div>
        <div class="table-responsive m-t-35">
            <table class="table">
                <thead>
                <tr>
                    <th>File Title</th>
                    <th>File Author</th>
                    <th>File Course</th>
                    <th>File Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    @foreach ($lesson as $lessons)
                        <tr>
                            <td>{{$lessons->lesson_title}}</td>
                            <td>{{$lessons->author}}</td>
                            <td>{{$lessons->course}}</td>
                            <td>{{$lessons->status}}</td>
                            <td>
                                <a href="/lessons/{{ $lessons->id }}"><button class="buttonSpacing widget_btn btn btn-sm btn-outline-primary"><i class="fa fa-angle-double-right" aria-hidden="true"></i> VIEW</button></a>
                                <a href="/lessons/{{ $lessons->id }}"><button class="buttonSpacing widget_btn btn btn-sm btn-outline-primary"><i class="fa fa-download" aria-hidden="true"></i> DOWNLOAD</button></a>
                                <button class="buttonSpacing widget_btn btn btn-sm btn-outline-success" data-toggle="modal" data-target="#lesson-update-{{ $lessons->id }}"><i class="fa fa-upload" aria-hidden="true"></i> UPDATE</button>
                                <button class="buttonSpacing widget_btn btn btn-sm btn-outline-danger" data-toggle="modal" data-target="#lesson-delete-{{ $lessons->id }}"><i class="fa fa-minus-circle" aria-hidden="true"></i> DELETE</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>