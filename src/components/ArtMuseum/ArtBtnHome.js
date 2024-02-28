import { Button } from '../Button';

function ArtBtnHome({ art }) {
    return (
        <div className="flex-1 h-full relative">
            <img className="w-full h-[90%] object-cover object-center z-0" src={art.url} alt="..." />
            <div className="absolute left-[10%] bottom-[20%] z-10">
                <p className={`mb-4 text-[22px] ${art.btn === 'Get It First' ? '' : 'text-white'}`}>{art.caption}</p>
                {art.btn === 'Get It First' ? <Button>{art.btn}</Button> : <Button bgWhite>{art.btn}</Button>}
            </div>
        </div>
    );
}

export default ArtBtnHome;
