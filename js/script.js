let quotes = [
	{
		quote: "If you make the Internet, live on the internet.",  
		author: "Matthew Mullenweg, WordPress"
	}, 
	
	{
		quote: "Find something you love and do it better than everyone else.",
		author: "Gurbaksh Chahal, RadiumOne"
	},

	{
		quote: "I find it best to dive right in and learn the hard way.",
		author: "Pete Cashmore, Mashable"
	},

	{
		quote: "If you do the things that are easier first, then you can actually make a lot of progress.",
		author: "Mark Zuckerberg, Facebook"
	},

	{
		quote: "A hard thing is done by figuring out how to start.",
		author: "Rand Fishkin, SEOmoz"
	},

	{
		quote: "To any entrepreneur: if you want to do it, do it now. If you don’t, you’re going to regret it.",
		author: "Catherine Cook, MyYearbook"
	},

	{
		quote: "Everything started as nothing.",
		author: "Ben Weissenstein, Grand Slam Garage Sales"
	},

	{
		quote: "I don’t have big ideas. I sometimes have small ideas, which seem to work out.",
		author: "Matt Mullenweg, WordPress"
	},

	{
		quote: "I think I was very naïve early on, but that also meant I didn’t know what couldn’t be done.",
		author: "Matt Mickiewicz, 99 Designs"
	},

	{
		quote: "It’s not about how many years of experience you have. It’s about the quality of your years of experience.",
		author: "Jacob Cass, Logo of the Day"
	},

	{
		quote: "Every single person I know who is successful at what they do is successful because they love doing it.",
		author: "Joe Penna, Mystery Guitar Man"
	},

	{
		quote: "My number one piece of advice is: you should learn how to program.",
		author: "Mark Zuckerberg, Facebook"
	},

	{
		quote: "Focusing on one thing and doing it really, really well can get you very far.",
		author: "Kevin Systrom, Instagram"
	},

	{
		quote: "Success is defined in units of fun. It’s all about being happy.",
		author: "Jake Nickell, Threadless"
	},
	{
		quote: "Solving specific problems is what drives me. I am not interested in having a career. I never have been.",
		author: "Sean Parker, Napster"
	},

	{
		quote: "I’m here to build something for the long-term. Anything else is a distraction.",
		author: "Mark Zuckerberg, Facebook"
	},

	{
		quote: "One can get anything if he is willing to help enough others get what they want.",
		author: "Zig Ziglar, Motivational Speaker"
	},

	{
		quote: "Brilliant thinking is rare, but courage is in even shorter supply than genius.",
		author: "Peter Thiel, Zero to One"
	},

	{
		quote: "All failed companies are the same: they failed to escape competition.",
		author: "Peter Thiel, Zero to One"
	},

	{
		quote: "Don't worry about failure; you only have to be right once.",
		author: "Drew Houston"
	},

	{
		quote: "As long as your going to be thinking anyway, think big.",
		author: "Donald Trump"
	},

	{
		quote: "Chase the vision, not the money; the money will end up following you.",
		author: "Tony Hsieh"
	},

	{
		quote: "Always deliver more than expected.",
		author: "Larry Page, Co-Founder, Google"
	},

	{
		quote: "If you’re not a risk taker, you should get the hell out of business.",
		author: "Ray Kroc, McDonald’s Founder"
	},

	{
		quote: "Ideas are commodity. Execution of them is not.",
		author: "Michael Dell, Dell Computers"
	},

];
let i = 0;
document.getElementById("new-quote").onclick = function() {getQuote()}

getMessage = () =>{
	document.getElementById("text").innerHTML = quotes[i].quote;
	document.getElementById("author").innerHTML = quotes[i].author;
}

getQuote = () => {
	getMessage();
	i++;
	if (i >= quote.length){
		i = 0;
	}
};
