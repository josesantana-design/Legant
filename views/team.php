<!-- Equipo -->
<section class="team">
	<div class="container">
		<div class="team_title">Nuestro Equipo</div>
		<div class="team_subtitle">Equipo de trabajo de Legant</div>

		<div class="team_row">

			<div v-for="team in teams" class="team_wrapper">
				<div class="team_member">
					<img src="img/{{ team.image }}">
					<div class="team_member_description">
						
						<ul class="team_member_description_redes">
							<li><i class="fa fa-facebook"></i></li>
							<li><i class="fa fa-twitter"></i></li>
							<li><i class="fa fa-instagram"></i></li>
						</ul>

						<div class="team_member_description_info">
							<h2>{{ team.name}}</h2>
							<p>{{ team.position }}</p>
						</div>

					</div>
				</div>
			</div>

		</div>
	</div>
</section>
