import React from 'react';
import $ from 'jquery';

export default function Time(props) {
    
    // $('.alert').alert();

    return (
        <div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Time:</strong> {props.now}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
        </div>
    )
}
