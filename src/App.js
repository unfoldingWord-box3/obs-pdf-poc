import './App.css';
import OpenBibleStories from './components/OpenBibleStoriesPDF';

function App() {

  const bookTitle = 'Open Bible Stories (English)';
  // useManifestFromRepository;
  // useTitleFromManifest;
  const markdownStories = [
    `# 1. The Creation
  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-01-01.jpg)
  
  This is how God made everything in the beginning. He created the universe and everything in it in six days. After God created the earth it was dark and empty because he had not yet formed anything in it. But God’s Spirit was there over the water.   This is how God made everything in the beginning. He created the universe and everything in it in six days. After God created the earth it was dark and empty because he had not yet formed anything in it. But God’s Spirit was there over the water.
  This is how God made everything in the beginning. He created the universe and everything in it in six days. After God created the earth it was dark and empty because he had not yet formed anything in it. But God’s Spirit was there over the water.

  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-01-02.jpg)
  
  Then God said, “Let there be light!” And there was light. God saw that the light was good and called it “day.” He separated it from the darkness, which he called “night.” God created the light on the first day of creation.
  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-01-03.jpg)
  
  On the second day of creation, God said, “Let there be an expanse above the waters.” And there was an expanse. God called this expanse “sky.”
  
  _A Bible story from: Genesis 1-2_`,
    `# 2. Sin Enters the World
  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-02-01.jpg)
  
  Adam and his wife were very happy living in the beautiful garden God had made for them. Neither of them wore clothes, but this did not cause them to feel any shame because there was no sin in the world. They often walked in the garden and talked with God.
  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-02-02.jpg)
  
  But there was a snake in the garden. He was very crafty. He asked the woman, “Did God really tell you not to eat the fruit from any of the trees in the garden?”
  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-02-03.jpg)
  
  The woman answered, “God told us we could eat the fruit of any tree except from the tree of the knowledge of good and evil. God told us, ‘If you eat that fruit or even touch it, you will die.’”
  
  ![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-02-04.jpg)
  
  The snake responded to the woman, “That is not true! You will not die. God just knows that as soon as you eat it, you will be like God and will understand good and evil like he does.”
  
  _A Bible story from: Genesis 3_`,
  ];

  return (
    <div className="App">
      <OpenBibleStories bookTitle={bookTitle} markdownStories={markdownStories} />
    </div>
  );
}

export default App;
