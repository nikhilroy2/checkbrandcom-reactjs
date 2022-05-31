import React from 'react';

function FilterLeftSide(props) {
    return (
        <div className='FilterLeftSide'>
            {/* side arrow btn */}
            <button className="btn btn-muted m-0 p-0">
                <svg width={40} fill="var(--text-white-50)" className="MuiSvgIcon-root  MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
            </button>
        </div>
    );
}

export default FilterLeftSide;