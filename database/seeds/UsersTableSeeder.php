<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Naofal Mufid',
            'email' => 'valnobcc@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('dibuka'),
            'role' => 0
        ]);
    }
}
