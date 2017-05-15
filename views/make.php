<!-- Lo que Hacemos -->
<section class="make">
	<div class="container">
		<h3 class="make_title">Lo que hacemos</h3>
		<p class="make_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam, porro officia sint soluta perferendis?</p>

		<div class="make_row">

			<div v-for="make in makes" class="make_development">
				<div class="make_development_ico">
					<img src="img/{{ make.image }}">
				</div>
				<h4 class="make_development_title">{{ make.title }}</h4>
				<p class="make_development_description">{{ make.description }}</p>
			</div>
			
		</div>

		<a href="#" class="make_button">Ver Nuestros Trabajos</a>
		
	</div>
</section>