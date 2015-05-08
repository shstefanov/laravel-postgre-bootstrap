<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		\DB::table('users')->delete();
        
		\DB::table('users')->insert(array (
			0 => 
			array (
				'id' => 1,
				'username' => 'username1',
				'password' => 'alalalalal',
				'email' => 'ajshdgjasgh@kjshkjs.dd',
				'created_at' => NULL,
				'updated_at' => NULL,
			),
			1 => 
			array (
				'id' => 2,
				'username' => 'username2',
				'password' => 'azazazazaz',
				'email' => 'zzzzzzz@zzzz.dd',
				'created_at' => NULL,
				'updated_at' => NULL,
			),
		));
	}

}
