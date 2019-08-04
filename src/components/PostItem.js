import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class PostItem extends Component {
    constructor(props) {
        super(props);

    }
    convertToSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
        return (
            <div>
                <div className="post-preview">
                    <Link to="post" to={"post/" + this.convertToSlug(this.props.title) + "." + this.props.postId + ".html"}>
                        <img className="post-preview-img" src={this.props.imgUrl} />
                        <h2 className="post-title">
                            {this.props.title}
                        </h2>
                        <h3 className="post-subtitle">
                            {this.props.describe}
                        </h3>
                    </Link>
                    <p className="post-meta">Posted by
                <a href="/">Start Bootstrap</a>
                        on September 18, 2019</p>
                </div>
                <hr />
            </div>

        );
    }
}

export default PostItem;