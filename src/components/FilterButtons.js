import React from 'react';

export default class FilterButtons extends React.Component {
    render() {
        return (
            <div class="btn-group" role="group">
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter
              </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="#">By category</a>
                        <a class="dropdown-item" href="#">By price</a>
                        <a class="dropdown-item" href="#">By favorite</a>
                    </div>
                </div>
            </div>
        )
    }
}