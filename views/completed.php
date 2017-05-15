<section class="completed">
	<div class="container">

		<div class="completed_row">

			<div v-for="completed in completeds" class="completed_column">
				<span class="completed_icon"><i class="fa {{ completed.icon }}"></i></span>
				<div class="completed_description">
					<h3 class="completed_description_number counter">{{ completed.counter }}</h3>
					<h4 class="completed_description_title">{{ completed.title }}</h4>
				</div>
			</div>		

		</div>	
		
	</div>

</section>