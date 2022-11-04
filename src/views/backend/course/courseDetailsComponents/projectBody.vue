<template>

	<div v-if="submissions.length" class="card bg_transparent shadow-0 border-0 project_card_bg mb-4">
		<div class="card-body">
			<div class="project_description rounded  p-4">
				<h3>{{get_selected_content_type}} Submissions</h3>
				
				<div class="project_submissions" :key="submission.id" v-for="submission in submissions">
					<ul>
						<li class="d-flex gap-2">
							<span>Mark :</span> 
							<a>
								{{submission.mark}}
							</a>
						</li>
						<li class="d-flex gap-2">
							<span>Repo Link :</span> 
							<a target="_blank" :href="submission.repo_link">{{submission.repo_link}}</a> 
						</li>
						<li class="d-flex gap-2">
							<span>Live Link :</span> 
							<a target="_blank" :href="submission.repo_link">{{submission.live_link}}</a>  
						</li>
						<li class="d-flex gap-2">
							<span>Comment :</span> 
							<div v-html="submission.comment"></div>
						</li>
						<li class="d-flex gap-2">
							<span>Date :</span> 
							<div>
								{{new Date(submission.created_at).toLocaleDateString() + ' ' +new Date(submission.created_at).toLocaleTimeString()}}
							</div>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>

	<div class="card bg_transparent shadow-0 border-0 project_card_bg">
		<div class="card-body">
			<form action="#" @submit.prevent="fetch_submit_project($event.target)" class="project_submission_form rounded  p-4">
				<h3>{{get_selected_content_type}} submission form</h3>
				<div class="form-group mb-3">
					<label for="repository_link">Github repository link</label>
					<input type="text" name="repo_link" id="repository_link"  class="form-control">
				</div>
				<div class="form-group mb-3">
					<label for="live_link">Hosted website live link</label>
					<input type="text" id="live_link" name="live_link"  class="form-control">
				</div>
				<div class="form-group mb-3">
					<label for="comment">Comment</label>
					<textarea class="form-control" name="comment" id="comment"></textarea>
				</div>
				<div class="form-group">
					<button class="btn btn-secondary">Submit</button>
				</div>
			</form>
		</div>
	</div>

	<div class="card bg_transparent shadow-0 border-0 project_card_bg mt-4">
		<div class="card-body">
			<div class="project_description rounded  p-4">
				<h3>{{get_selected_content_type}} Description</h3>
				
				<h4>{{homework.title}}</h4>

				<div class="text_instruction" v-html="homework.text_instruction"></div>

				<div class="source_link">
					<h4>Related Image:</h4>
					<img :src="homework.source_link_full" class="img-fluid" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	methods:{
		...mapActions(['fetch_submit_project']),
	},	
	computed: {
		...mapGetters(['get_selected_content_type','get_selected_homework']),
		homework: function(){
			return this.get_selected_homework;
		},
		submissions: function(){
			return this.get_selected_homework.course_batch_season_week_episode_project_submissions || [];
		}
	}
}
</script>

<style>

</style>