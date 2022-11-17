$(document).ready(function () {
    show_order();
    show_comment();
});

function show_order() {
    $.ajax({
        type: 'GET',
        url: '/join',
        data: {},
        success: function (response) {
            let rows = response['firstName']
            for (let i = 0; i < rows.length; i++) {
                let firstName = rows[i]['enName']

                let temp_html = `
                <li class="req_member">
                    ${firstName}
                    <div class="wait_box">승인 대기중</div>
                </li>`
                $('#name_box').append(temp_html)
            }
        }
    })
}

function join() {
    let koName = $('#koName').val()
    let enName = $('#enName').val()
    let mbti = $('#mbti').val()
    let blog = $('#blog').val()
    let introduce = $('#introduce').val()
    let strengths = $('#strengths').val()
    let joinSubmit = $('#joinSubmit').val()
    let firstName = enName.split(' ')[0].replace(/^[a-z]/, char => char.toUpperCase());

    $.ajax({
        type: "POST",
        url: "/join",
        data: {name_give: firstName},
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}

function save_comment() {
    let formem = $('#inputGroupSelect01').val()
    let guestName = $('#guestName').val()
    let guestMbti = $('#guestMbti').val()
    let guestComment = $('#guestComment').val()
    $.ajax({
        type: 'POST',
        url: '/guestBook',
        data: {'formem_give': formem,'guestName_give': guestName, 'guestMbti_give': guestMbti, 'guestComment_give': guestComment},
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}

function show_comment() {
    $.ajax({
        type: "GET",
        url: "/guestBook",
        data: {},
        success: function (response) {
            let rows = response['guests']
            for (let i = 0; i < rows.length; i++) {
                let formem = rows[i]['formem']
                let guestName = rows[i]['guestName']
                let guestMbti = rows[i]['guestMbti']
                let guestComment = rows[i]['guestComment']

                switch (formem) {
                    case "정훈": {

                        break
                    }
                    case "승민": {
                        break
                    }
                    case "민욱": {
                        break
                    }
                    case "예진": {
                        break
                    }
                    case "진우": {
                        break
                    }
                    default: "TeamN5a"
                        break
                }

                let temp_html = `<div class="card">
                                    <figcaption class="blockquote-footer">
                                        ${guestMbti}<cite title="Source Title">${guestName}</cite>
                                    </figcaption>
                                    <blockquote class="blockquote">
                                        <p>${guestComment}</p>
                                    </blockquote>
                                    
                                </div>`
                $('#comm-list').append(temp_html)
            }
        }
    });
}

function open_box() {
    $('#comment-box').show()
}

function close_box() {
    $('#comment-box').hide()
}

