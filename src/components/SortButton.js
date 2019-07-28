import React from 'react';

export default class SortButtons extends React.Component {
    render() {
        return (
            <div class="btn-group" role="group">
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort parameter
              </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item" href="#" onClick={this}>By popularity</a>
                        <a class="dropdown-item" href="#">By price</a>
                    </div>
                </div>
            </div>
        )
    }
}