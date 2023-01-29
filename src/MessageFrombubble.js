import me from "./emoji.png";

function MessageFromBubble() {
  // Props that will need to be passed down
  // Image , Message Contents

  return (
    <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center  mg-0 p-0">
      {/* messages here */}
      <div class="flex items-center mb-4">
        <div class="flex-none flex flex-col items-center space-y-1 mr-4">
          <img class="rounded-full w-10 h-10" src={me} />
        </div>
        <div class="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div>Lorem ipsum dolor sit</div>
          Below is the code needed to have the bubble on the right
          {/* <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div> */}
          <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        </div>
      </div>
    </section>
  );
}

export default MessageFromBubble;
