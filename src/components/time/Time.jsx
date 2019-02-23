import React from 'react';
import $ from 'jquery';

export default function Time(props) {
    
    $('.alert').alert();

    return (
        <div>
            {props.now}
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}
