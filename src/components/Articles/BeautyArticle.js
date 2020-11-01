import React from 'react';
import Article from '../Article';
import girl1 from '../../assets/girl1.jpg';

function BeautyArticle(props) {

    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lacus vitae quam hendrerit dignissim. Aliquam vitae metus aliquet, semper arcu sodales, tincidunt augue. Curabitur dapibus ipsum non nunc pretium, et faucibus justo imperdiet. Mauris faucibus feugiat lectus, vel ornare eros auctor et. Nam in risus lobortis, suscipit dolor a, fringilla lorem. Sed at pretium turpis, vitae maximus purus. Donec ut est in mi sagittis lobortis eu sit amet quam. Aenean risus ante, congue quis erat ut, viverra ornare urna. Mauris sodales ultricies quam ac finibus. Pellentesque feugiat aliquam arcu nec iaculis. Duis dictum mollis quam, a mollis ante elementum vel. In id ipsum risus. Cras quis interdum enim, vestibulum dapibus odio. Nam consectetur eget risus eget consequat.

    Vestibulum tincidunt quam et metus scelerisque venenatis. Fusce id urna sit amet nibh suscipit scelerisque. Nam id porta ligula, vitae mollis nulla. In euismod dignissim tellus et molestie. Aliquam consectetur, est sit amet gravida sagittis, nibh augue ultricies sem, sit amet ultricies ipsum sapien sit amet nisl. Ut risus augue, finibus at mi at, iaculis lacinia turpis. Donec accumsan eros id ex molestie, vitae tempor sem varius. Etiam accumsan, purus nec luctus feugiat, eros odio mattis magna, in mattis elit magna in nisi. Quisque interdum id enim ac fermentum. Fusce ligula ligula, dignissim ut aliquam non, ullamcorper eget nisl. Duis lobortis est id elit posuere rutrum. Integer sapien justo, vulputate gravida libero et, sagittis suscipit eros. Suspendisse potenti. Sed vestibulum, magna auctor dictum iaculis, ipsum nisl lacinia ligula, id euismod augue sem vel metus.
    
    Mauris aliquet lacinia risus in tincidunt. Sed tincidunt sagittis sodales. Nam imperdiet est sed volutpat mattis. Cras massa lorem, scelerisque in faucibus eu, congue a quam. Nunc a quam et nunc vehicula euismod in at nisi. In elementum suscipit diam vel condimentum. Praesent ex leo, ornare eu odio et, volutpat molestie eros. Duis rhoncus lectus sed velit luctus, tincidunt cursus est sodales. Praesent non aliquam purus. Cras accumsan condimentum dui, eu imperdiet magna pretium nec. Nulla viverra tincidunt mauris, non ornare nunc consectetur ac. Aliquam vel velit tristique, rhoncus leo sit amet, lobortis tortor. Integer a tempus diam. Nunc convallis eget ante ac hendrerit.
    
    Nulla sem felis, cursus vel molestie eu, rutrum a felis. Maecenas bibendum, dolor at malesuada semper, libero nulla tincidunt mi, in pellentesque erat erat et odio. Duis at ipsum scelerisque, molestie augue sit amet, feugiat ante. Pellentesque vel facilisis urna. Suspendisse risus mi, commodo vel justo nec, cursus blandit sapien. Cras aliquet augue ac eleifend molestie. Pellentesque non sem id libero viverra iaculis. Ut mattis non magna at egestas.
    
    Cras velit ante, consequat at odio ac, ultrices lacinia augue. Pellentesque ac rutrum felis. Nullam sed semper libero. Quisque a sapien ac nibh convallis viverra. Donec justo arcu, faucibus ut hendrerit quis, finibus ut dolor. Mauris ac sagittis neque. Cras imperdiet eget quam eget varius. Duis mi lacus, hendrerit sit amet feugiat et, ultrices sit amet turpis. Duis dictum libero dolor, ut commodo ex imperdiet non. Pellentesque auctor faucibus tincidunt. Duis nec neque quis purus mollis scelerisque.
    
    Duis congue eleifend sapien. Mauris finibus consectetur condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin felis enim, rhoncus eu porta eu, ullamcorper ut eros. Aenean lobortis nisl ex, sit amet tincidunt velit feugiat cursus. Quisque felis eros, consequat porta condimentum ut, tincidunt nec mauris. Integer ligula nisi, egestas vel libero sed, ornare vehicula nunc. Curabitur lacinia ligula id ornare placerat. Integer non sapien faucibus, interdum tortor vitae, posuere orci. Maecenas tortor lacus, pharetra at auctor efficitur, imperdiet nec enim. Curabitur sed mattis turpis. Maecenas lacinia lobortis fermentum. Proin sagittis lorem leo.`


    return (
        <Article authorName="HM" articleTitle="The descent and deviation of individual beauty"
        articleBody={text} image={girl1}/> 
    );
}

export default BeautyArticle;
