<div class="portfolio"> 
	<h2 class="portfolio_title">Portafolio</h2>
	<p class="portfolio_subtitle">Ultimos trabajos</p>
	<div class="portfolio_categories" id="filters">
		<li data-filter="*" class="button">Todos</li>
		<li data-filter=".web" class="button">Web</li>
		<li data-filter=".diseño" class="button">Diseños</li>
		<li data-filter=".iconos" class="button">Iconos</li>
	</div>
	<div class="portfolio_thumbnails">

		<li v-for="portfolio in portfolios" class="portfolio_thumbnails_item {{ portfolio.filter }}">
			<div class="portfolio_thumbnails_item_inside">
				<img src="img/{{ portfolio.image }}"> 
			</div>
		</li>
	</div>
</div>